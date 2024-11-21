import './Cards.css';
import { GenderSvg } from '../../assets/GenderSvg';
import SetStatusByBackground from '../../utils/SetBackgroundByStatus';

function Card ({ id, name, image, status, gender, species, onClick }) {
    
    return (
        <article id="card">  
            <header className="card-header">      
                <img src={image} alt={`${name}`} className='card-image'/>
            </header>
            <main className="card-main" style={{ backgroundColor: SetStatusByBackground(status)}}>
                <h2 className="card-title" onClick={onClick}> { name } </h2>
                <span className="card-info"> <GenderSvg/> { gender } </span>
            </main>
        </article>
    )
}


export default Card;