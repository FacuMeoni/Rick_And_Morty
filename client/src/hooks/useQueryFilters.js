import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

const useQueryFilters = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const [ filters, setFilters ] = useState({
        status: queryParams.get("status")|| "" ,
        gender: queryParams.get("gender")|| "",
        name: queryParams.get("name") || "",
        currentPage: Number(queryParams.get("page") || 1)
    });

    const updateQuery = (key, value) => {
        if(queryParams.get(key) === value) {
            queryParams.delete(key);
            setFilters({
                ...filters,            
                [key]: ""
            });
        } if(key === "name"){
            queryParams.set("name", value);
            queryParams.delete("gender");
            queryParams.delete("status");
            queryParams.set("page", 1);
        } else { 
            queryParams.set(key, value);
            queryParams.set("page", 1);
            setFilters({
                ...filters,
                [key]: value
            });
        }

       navigate({ search: queryParams.toString(location.search)});
    }

    const resetQuery = () => {
        queryParams.delete("gender"); 
        queryParams.delete("name"); 
        queryParams.delete("status"); 
        queryParams.set("page", 1);

        setFilters({ status: "", gender: "", currentPage: 1 });
        navigate({ search: queryParams.toString() });
    }
    
    return { filters, updateQuery, resetQuery }
}

export default useQueryFilters; 
