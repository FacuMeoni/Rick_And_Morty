import Card from "./Card";
import { useCharacters } from "../hooks/useCharacters";


function CardSection () {
    const { characters, error, page } = useCharacters();


    return (
        <section>
            { characters && characters.map((character) => (
                <Card key={character.id} id={character.id} name={character.name} image={character.image}/>
            ))}
        </section>
    )
}


export default CardSection;