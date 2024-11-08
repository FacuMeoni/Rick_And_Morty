

const Filters = ({ updateQuery, resetQuery }) => {

    const handleClickReset = () => {
        updateQuery("gender", "")
        updateQuery("status", "")
    }
    
    return(
        <div>
            <div>
                <button onClick={() => updateQuery("status", "Alive")}>Alive</button>
                <button onClick={() => updateQuery("status", "Dead")} >Dead</button>
                <button onClick={() => updateQuery("status", "Unknown")}>Unknown</button>
            </div>
            

            <div>
                <button onClick={() => updateQuery("gender", "Male")}>Male</button>
                <button onClick={() => updateQuery("gender", "Female")}>Female</button>
                <button onClick={() => updateQuery("gender", "Genderless")}>Genderless</button>
            </div>

            <button onClick={handleClickReset}>Reset filters</button>
        </div>
    )
}


export default Filters;