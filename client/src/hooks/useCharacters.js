import axios from 'axios';
import { useEffect, useState } from 'react';
const apiUrl = 'http://localhost:3000/characters?page=';

export const useCharacters = () => {

    const [ characters, setCharacters ] = useState([]);
    const [error, setError] = useState(null);
    const [ page, setPage ] = useState(1);

    const fetchCharacters = () => {
        axios.get(`${apiUrl}${page}`)
        .then((response) => response.data)
        .then((data) => {
            setCharacters(data.characters)
        })
        .catch(error => setError(error.message))
    }
    
    useEffect(() => {
        fetchCharacters();
    }, []);


    return { characters, error, page };
}