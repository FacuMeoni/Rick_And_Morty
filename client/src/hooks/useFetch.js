import { useState } from 'react';
import axios from 'axios';

export const useFetch = (path) => {
    
    const [ data, setData] = useState({});
    const [ error, setError ] = useState(false);
    const [ isPending, setIsPending ] = useState(false);

    const fetch = () => {
        setIsPending(true);

        axios.get(path)
        .then((response) => response.data)
        .then((data) => {
            setData(data);
            setError(false);
        })
        .catch(error => { 
            if (error.response) { 
                setError(error.response.data.message);
            } else {
                setError("An unnexpected error ocurred, please try again.")
            }
         }).finally(() => setIsPending(false))
    }

  return { data, error, isPending, fetch }
}


export default useFetch;