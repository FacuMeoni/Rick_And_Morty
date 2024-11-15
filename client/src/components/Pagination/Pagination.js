import { useLocation, useNavigate } from 'react-router-dom';
import renderPagesButtons from './RenderPageButtons';


const Pagination = ({ totalPages }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get("page")) || 1;
    
    function handlePageChange(newPage) {
        queryParams.set("page", newPage)
        navigate({ search: queryParams.toString() });
    }

    if(totalPages <= 1)return null;

    return(
        <div style={{ display: "flex", justifyContent: "center", gap: "5px"}}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> Back </button>
            { renderPagesButtons({ totalPages, handlePageChange}) }
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> Next </button>
        </div>
    )
}

export default Pagination;
