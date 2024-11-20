import './Pagination.css';

const renderPagesButtons = ({ totalPages, handlePageChange, currentPage }) => {
    return Array.from({ length: totalPages }, (_, index) => { 
        const pageNumber = index + 1;
        return (
            <button key={pageNumber} className={pageNumber === currentPage ? "current-page" : "pages" } onClick={() => handlePageChange(pageNumber)}> { pageNumber } </button>
        )
    });
}

export default renderPagesButtons;