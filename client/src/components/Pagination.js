import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';


const Pagination = ({ totalPages }) => {

    
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get("page")) || 1;
    
    if(totalPages <= 1)return null;
    
    function handlePageChange(newPage) {
        queryParams.set("page", newPage)
        navigate({ search: queryParams.toString() });
    }

    const renderPagesButtons = () => {
        return Array.from({ length: totalPages}, (_, index) => { 
            const pageNumber = index + 1;
            return (
                <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}> { pageNumber } </button>
            )
        });
    }
    
    return(
        <div style={{ display: "flex", justifyContent: "center", gap: "5px"}}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> Back </button>
            { renderPagesButtons() }
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> Next </button>
        </div>
    )
}

export default Pagination;
