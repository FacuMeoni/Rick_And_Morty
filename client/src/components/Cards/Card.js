function Card ({ id, name, image, onClick}) {
    
    return (
        <article>  
            <h2>
                <button onClick={onClick}>
                    { name }
                </button>
            </h2>

            <img src={image} alt={`${name}`} />
        </article>
    )
}


export default Card;