const renderPagesButtons = ({ totalPages, handlePageChange }) => {
    return Array.from({ length: totalPages}, (_, index) => { 
        const pageNumber = index + 1;
        return (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}> { pageNumber } </button>
        )
    });
}


export default renderPagesButtons;