import Card from "./Card";
import Modal from "../Modal_character/Modal";

function CardSection ({ characters, visibleModal, openModal, closeModal, selectedCharacter }) {

    return (
        <section>
            { visibleModal && <Modal character={selectedCharacter} closeModal={closeModal} />}
            
            { characters && characters.map((character) => (
                <Card key={character.id} id={character.id} name={character.name} image={character.image} onClick={()=> openModal({character}) }/>
            ))}
        </section>
    )
}


export default CardSection;