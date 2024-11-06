const Pagination = ({ totalPages, currentPage, goToPage }) => {

    if(totalPages <= 1)return null;

    const renderPagesButtons = () => {
        return Array.from({ length: totalPages}, (_, index) => { 
            const pageNumber = index + 1;
            return (
                <button key={pageNumber} onClick={() => goToPage(pageNumber)}> { pageNumber } </button>
            )
        });
    }

    return(
        <div>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}> Back </button>
            { renderPagesButtons() }
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}> Next </button>
        </div>
    )
}

export default Pagination;