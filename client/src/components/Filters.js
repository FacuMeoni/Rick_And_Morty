import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";


const Filters = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [filters, setFilters ] = useState({
        status: queryParams.get("status")|| "" ,
        gender: queryParams.get("gender")|| "",
        page: Number(queryParams.get("page") || 1)
    });

    function handleUpdateQuery (key, value) {
        if(queryParams.get(key) === value) {
            queryParams.delete(key);
            setFilters({
                ...filters,            
                [key]: ""
            });
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

    function resetFilters() {
        queryParams.delete("gender"); 
        queryParams.delete("status"); 
        queryParams.set("page", 1);

        setFilters({ status: "", gender: "", page: 1 });
        navigate({ search: queryParams.toString() });
    }

    return(
        <div>
            <div>
                <button onClick={() => handleUpdateQuery("status", "Alive")}>Alive</button>
                <button onClick={() => handleUpdateQuery("status", "Dead")} >Dead</button>
                <button onClick={() => handleUpdateQuery("status", "Unknown")}>Unknown</button>
            </div>
            

            <div>
                <button onClick={() => handleUpdateQuery("gender", "Male")}>Male</button>
                <button onClick={() => handleUpdateQuery("gender", "Female")}>Female</button>
                <button onClick={() => handleUpdateQuery("gender", "Genderless")}>Genderless</button>
            </div>

            <button onClick={resetFilters}>All</button>
        </div>
    )
}


export default Filters;