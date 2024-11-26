import './Cards.css';
import { GenderSvg } from '../../assets/GenderSvg';
import SetStatusByBackground from '../../utils/SetBackgroundByStatus';
import LoadingImage  from '../../assets/LoadingImage.webp';
import { useState } from 'react';

function Card ({ id, name, image, status, gender, species, onClick }) {

    const [ImageLoaded, setImageLoaded] = useState(false);

    const setLoadingImage = () => setImageLoaded(true);
    
    return (
        <article id="card">  
            <header className="card-header">      
                {image && !ImageLoaded && <img
                        src={LoadingImage}
                        alt='loading-image'
                        className="card-image loading"
                    />} 
                {image && (
                   <img src={image} alt={`${name}`} className={`card-image ${ImageLoaded ? '' : 'hidden'}`}
                   onLoad={setLoadingImage}/> 
                )}
            </header>
            <main className="card-main" style={{ backgroundColor: SetStatusByBackground(status)}}>
                <h2 className="card-title" onClick={onClick}> { name } </h2>
                <span className="card-info"> <GenderSvg/> { gender } </span>
            </main>
        </article>
    )
}


export default Card;