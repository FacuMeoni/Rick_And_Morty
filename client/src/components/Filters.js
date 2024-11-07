import useQueryFilters from "../hooks/useQueryFilters";


const Filters = () => {
    const { updateQuery, resetQuery } = useQueryFilters();
    
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

            <button onClick={resetQuery}>All</button>
        </div>
    )
}


export default Filters;