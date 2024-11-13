import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

const useQueryFilters = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const [filters, setFilters] = useState({
        status: queryParams.get("status") || false,
        gender: queryParams.get("gender") || false,
        name: queryParams.get("name") || false,
        currentPage: Number(queryParams.get("page") || 1)
    });

    const updateQuery = (key, value) => {

        //if key is name, reset other filters and set name value.

        if (key === "name") {
            queryParams.set("name", value);
            queryParams.delete("gender");
            queryParams.delete("status");

            setFilters({
                name: value,
                status: false,
                gender: false,
            });

        // if value empty or the same of query params key, delete.
        } else if (value === "" || queryParams.get(key) === value) {
            queryParams.delete(key);
            setFilters((prev) => ({ ...prev, [key]: false }));

        // Else update an specific filter with the new value.
        } else {
            queryParams.set(key, value);
            setFilters((prev) => ({ ...prev, [key]: value }));

        }
        
        //reset to page 1 and update filters.
        queryParams.set("page", 1);
        setFilters((prev) => ({ ...prev, currentPage: 1 }));
        
        // navigate with the new parameters.
        navigate({ search: queryParams.toString(location.search) });
    }

    const resetQuery = (filter) => {
        
        // if filter parameter is name, delete all query params and reset filters.
        if (filter === "name") {

            queryParams.delete("name");
            queryParams.delete("gender");
            queryParams.delete("status");

            setFilters({ status: false, gender: false, name: false });

        // else delete gender&status query params and reset filters.
        } else {

            queryParams.delete("gender");
            queryParams.delete("status");
            
            setFilters((prev) => ({ ...prev, gender: false, status: false  }));

        }

        //reset to page 1 and update filters.
        queryParams.set("page", 1);
        setFilters((prev) => ({ ...prev, currentPage: 1 }));
        
        // navigate to the new query params;
        navigate({ search: queryParams.toString() });
    }

    return { filters, updateQuery, resetQuery }
}

export default useQueryFilters; 
