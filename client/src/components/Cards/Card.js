import './Cards.css';
import '../../utils/BackgroundStyles.css';
import { GenderSvg } from '../../assets/GenderSvg';
import LoadingImage  from '../../assets/LoadingImage.webp';
import { useState } from 'react';

function Card ({ name, image, status, gender, onClick }) {

    const [ImageLoaded, setImageLoaded] = useState(false);

    const setLoadingImage = () => setImageLoaded(true);
    
    return (
        <article id="card" onClick={onClick}>  
            <header className="card-header">      
                { image && !ImageLoaded && 
                    <img
                        src={LoadingImage}
                        alt='loading-image'
                        className="card-image loading"/>
                } 
                { image && <img 
                    src={image}
                    alt={`${name}`} 
                    className={`card-image ${ImageLoaded ? '' : 'hidden'}`}
                    onLoad={setLoadingImage} /> 
                }
            </header>
            <main className={`card-main ${status}`}>
                <h2 className="card-title"> { name } </h2>
                <span className="card-info"> <GenderSvg/> { gender } </span>
            </main>
        </article>
    )
}


export default Card;