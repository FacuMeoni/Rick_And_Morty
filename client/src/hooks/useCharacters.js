import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const apiUrl = 'http://localhost:3000/characters';

export const useCharacters = () => {
    const location = useLocation();
    const [ characters, setCharacters ] = useState([]);
    const [characterDetail, setCharacterDetail] = useState({});
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ totalPages, setTotalPages ] = useState(0);

    const fetchCharacters = () => {
        setLoading(true);
        setError(null);

        axios.get(`${apiUrl}${location.search}`)
        .then((response) => response.data)
        .then((data) => {
            setCharacters(data.characters);
            setTotalPages(data.info.totalPages)
        })
        .catch(error => { 
            if (error.response) { 
                setError(error.response.data.message)
            } else if(error.request){
                setError('Network error, please try again later.')
            } else {
                console.log('Unexpected error:', error)
                setError('An unnexpected error ocurred. Please try again later.')
            }
         }).finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchCharacters();
    }, [location]);

    return { characters, error, loading, totalPages, setTotalPages, fetchCharacters, characterDetail, setCharacterDetail};
}