import axios from 'axios';
import { useEffect, useState } from 'react';
const apiUrl = 'http://localhost:3000/characters';

export const useCharacters = () => {
    const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ page, setPage ] = useState({
        currentPage: 1,
        totalPages: 0,
    });

    const fetchCharacters = () => {
        setLoading(true);
        setError(null);

        axios.get(`${apiUrl}?page=${page.currentPage}`)
        .then((response) => response.data)
        .then((data) => {
            setCharacters(data.characters);
            setPage((prevPage) => ({
                ...prevPage,
                totalPages: data.info.totalPages
            }));
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
    const goToPage = (newPage) => {
        setPage((prevPage) => ({
            prevPage,
            currentPage: newPage
        }))
    }
    
    useEffect(() => {
        fetchCharacters();
    }, [page.currentPage]);

    return { characters, error, loading, page, setPage, goToPage, fetchCharacters };
}