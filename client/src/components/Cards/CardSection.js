import './Cards.css';
import Card from "./Card";
import Modal from "../Modal_character/Modal";
import ErrorComponent from "../Error/Error";

function CardSection ({ characters, visibleModal, openModal, closeModal, selectedCharacter, error }) {
    
    if(error)return <ErrorComponent error={error}/>

    return (
        <section className="cards-container">
            { visibleModal && <Modal character={selectedCharacter} closeModal={closeModal} />}
            { characters && characters.map((character) => (
                <Card key={character.id} id={character.id} species={character.species} name={character.name} status={character.status} gender={character.gender } image={character.image} onClick={()=> openModal({character})}/>
            ))}
        </section>
    )
}


export default CardSection;