import './Navbar.css';
import { useEffect, useState } from "react"
import { TrashSvg } from '../../assets/TrashSvg';

const Filters = ({ filters, updateQuery, resetQuery }) => {

    const [ showButton, setShowButton ] = useState(false);
    const { status, gender } = filters;

    const handleClickReset = () => {
        resetQuery();
        setShowButton(false);
    }

    const isActive = (filter, value, type) => {
        if(filter === value)return `filters active ${type}-${value}`
        else return `filters ${type}-${value}`
    }

    useEffect(() => {
        setShowButton(!!status || !!gender); 
        
        return () => setShowButton(false);
    }, [ gender, status ])

    return(
        <div id='filters-container'>
            <button className={isActive(status, "Alive", "status")} onClick={() => updateQuery("status", "Alive")}>
                Alive
            </button>
            <button className={isActive(status, "Dead", "status")} onClick={() => updateQuery("status", "Dead")}>
                Dead
            </button>
            <button className={isActive(status, "unknown", "status")} onClick={() => updateQuery("status", "unknown")}>
                Unknown
            </button>
            <button className={isActive(gender, "Male", "gender")} onClick={() => updateQuery("gender", "Male")}>
                Male
            </button>
            <button className={isActive(gender, "Female", "gender")} onClick={() => updateQuery("gender", "Female")}>
                Female
            </button>
            <button className={isActive(gender, "Genderless", "gender")} onClick={() => updateQuery("gender", "Genderless")}>
                Genderless
            </button>
            <button className={isActive(gender, "unknown", "gender")} onClick={() => updateQuery("gender", "unknown")}>
                Unknown
            </button>
           { showButton &&  <button className='filters reset-filters' onClick={handleClickReset}> <TrashSvg/> </button> }
        </div>
    )
}


export default Filters;