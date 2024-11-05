function Card ({ id, name, image}) {
    return (
        <article>
            <h2> 
                { name }
            </h2>

        <img src={image} alt={`${name}`} />
        </article>
    )
}


export default Card;