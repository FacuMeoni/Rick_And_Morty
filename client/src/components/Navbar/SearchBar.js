import './Navbar.css';
import { CloseSvg, closeSvg } from '../../assets/CloseSvg';
import { useEffect, useState } from "react";
import { SearchSvg } from '../../assets/SearchSvg';

const SearchBar = ({ updateQuery, resetQuery, filters }) => {

    const [queryInfo, setQueryInfo] = useState("");
    const [ showDeleteButton, setShowDeleteButton] = useState(false);
    const { name } = filters;
    const handleChange = (event) => {
        setQueryInfo(event.target.value);
        setShowDeleteButton(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateQuery("name", queryInfo);
    }

    const handleReset = (event) => {
        event.preventDefault();
        resetQuery("name");
        setQueryInfo("");
        setShowDeleteButton(false);
    }

    useEffect(() => {
      setShowDeleteButton(!!name);
      !name ? setQueryInfo("") : setQueryInfo(name)

      return () => { setShowDeleteButton(false); setQueryInfo("") }
    },[name])

    return(
        <form onSubmit={handleSubmit} id='form-container'>
            <input placeholder="Search by name" value={queryInfo} onChange={handleChange} id='searchbar'/> 
            <button type="submit" disabled={!queryInfo} className='search-button'>
                <SearchSvg/>
            </button>
            { showDeleteButton && <button onClick={handleReset} className='reset-button'> <CloseSvg /> </button> }
        </form>
    )

}


export default SearchBar;

