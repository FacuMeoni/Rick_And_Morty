import { useEffect, useState } from "react"


const Filters = ({ filters, updateQuery, resetQuery }) => {

    const [ showButton, setShowButton ] = useState(false);
    const { status, gender } = filters;

    const handleClickReset = () => {
        resetQuery();
        setShowButton(false);
    }

    useEffect(() => {
        
        setShowButton(!!status || !!gender); 
        return () => setShowButton(false);

    }, [ gender, status ])

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

           { showButton &&  <button onClick={handleClickReset}> Reset filters </button> }
        </div>
    )
}


export default Filters;