import { useState } from "react";

const SearchBar = ({ updateQuery, resetQuery }) => {

    const [queryInfo, setQueryInfo] = useState("");
    const [ showDeleteButton, setShowDeleteButton] = useState(false);

    const handleChange = (event) => setQueryInfo(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateQuery("name", queryInfo);
        setShowDeleteButton(true);
    }

    const handleClick = (event) => {
        event.preventDefault();
        resetQuery("name");
        setQueryInfo("");
        setShowDeleteButton(false);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Search character by name, ej: Rick" value={queryInfo} onChange={handleChange}/> 
            <button type="submit" disabled={!queryInfo}>
                Search
            </button>
            { showDeleteButton && <button onClick={handleClick}> X </button> }
        </form>
    )

}


export default SearchBar;

