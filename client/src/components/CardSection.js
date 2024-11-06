import Card from "./Card";

function CardSection ({ characters }) {

    return (
        <section>
            { characters && characters.map((character) => (
                <Card key={character.id} id={character.id} name={character.name} image={character.image}/>
            ))}
        </section>
    )
}


export default CardSection;