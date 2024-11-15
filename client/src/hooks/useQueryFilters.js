import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { getInitialFilters, updateQueryParams, resetQueryParams } from "../utils/queryUtils";

const useQueryFilters = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [filters, setFilters] = useState(getInitialFilters(queryParams));

    const updateQuery = (key, value) => {
        updateQueryParams({ queryParams, key, value, setFilters});
        // navigate with the new parameters.
        navigate({ search: queryParams.toString(location.search) });
    }

    const resetQuery = (filter) => {
        resetQueryParams({ queryParams, filter, setFilters });
        // navigate to the new query params;
        navigate({ search: queryParams.toString() });
    }

    return { filters, updateQuery, resetQuery }
}

export default useQueryFilters; 
