import './Pagination.css'
import { useLocation, useNavigate } from 'react-router-dom';
import renderPagesButtons from './RenderPageButtons';


const Pagination = ({ totalPages, error }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get("page")) || 1;
    
    function handlePageChange(newPage) {
        queryParams.set("page", newPage)
        navigate({ search: queryParams.toString() });
    }

    if(totalPages <= 1 || !totalPages || error )return null;

    return(
        <div className='pagination'>
            <button className='pages-button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> Back </button>
            { renderPagesButtons({ totalPages, handlePageChange, currentPage }) }
            <button className='pages-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> Next </button>
        </div>
    )
}

export default Pagination;
