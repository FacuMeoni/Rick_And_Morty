import Filters from '../components/Filters';
import SearchBar from './SearchBar/SearchBar';
import useQueryFilters from '../hooks/useQueryFilters';

function Navbar () {

    const { filters, updateQuery, resetQuery } = useQueryFilters();

    return (
        <nav>
            <SearchBar updateQuery={updateQuery} resetQuery={resetQuery}/>
            <Filters updateQuery={updateQuery} resetQuery={resetQuery} filters={filters} />
        </nav>
    )
}


export default Navbar;