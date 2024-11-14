import Card from "./Card";
import Modal from "../Modal_character/Modal";
import ErrorComponent from "../Error";

function CardSection ({ characters, visibleModal, openModal, closeModal, selectedCharacter, error }) {
    
    if(error)return <ErrorComponent error={error}/>

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