import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from './useFetch';
const apiUrl = 'https://rick-andmorty.up.railway.app/characters';

export const useCharacters = () => {

    const location = useLocation();
    const { data, error, isPending, fetch } = useFetch(`${apiUrl}${location.search}`);
    const [ characters, setCharacters ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(0);

    useEffect(() => {
        fetch();
    }, [location]);

    useEffect(() => {
        if(data){
            setCharacters(data.characters)
            setTotalPages(data.info?.totalPages)
        }
    }, [data])

    return { characters, error, isPending, totalPages };
}