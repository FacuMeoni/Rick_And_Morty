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

        if(value === "" || queryParams.get(key) === value) {
            queryParams.delete(key);
        } else if (key === "name"){ 
            queryParams.set("name", value);
            queryParams.delete("gender");
            queryParams.delete("status");
        } else {
            queryParams.set(key, value);
        }

        queryParams.set("page", 1);
        navigate({ search: queryParams.toString(location.search)});
        setFilters({
            ...filters,
            [key]: value
        });
    }

    const resetQuery = (filter) => {

        if(filter === "name") {
            queryParams.delete("name"); 
            queryParams.delete("gender"); 
            queryParams.delete("status"); 
            setFilters({ status: "", gender: "", name:"", currentPage: 1 });
        } else {
            queryParams.delete("gender"); 
            queryParams.delete("status"); 
            setFilters({ status: "", gender: "", currentPage: 1 });
        }

        queryParams.set("page", 1);
        navigate({ search: queryParams.toString() });
    }
    
    return { filters, updateQuery, resetQuery }
}

export default useQueryFilters; 
