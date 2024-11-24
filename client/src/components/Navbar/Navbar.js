import './Navbar.css';
import Filters from './Filters';
import SearchBar from './SearchBar';
import useQueryFilters from '../../hooks/useQueryFilters';


function Navbar () {

    const { filters, updateQuery, resetQuery } = useQueryFilters();

    return (
        <nav className='navbar'>
                <SearchBar updateQuery={updateQuery} resetQuery={resetQuery} filters={filters}/>
                <Filters updateQuery={updateQuery} resetQuery={resetQuery} filters={filters} />
        </nav>
    )
}

export default Navbar;
