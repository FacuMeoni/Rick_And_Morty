import Navbar from "../components/Navbar";
import CardSection from "../components/Cards/CardSection";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "../components/Pagination/Pagination";
import { useModal } from "../hooks/useModal";

function Home () {
    const { characters, totalPages, fetchCharacters, error } = useCharacters();
    const { visibleModal, openModal, closeModal, selectedCharacter } = useModal();

    return (
        <section>
            <Navbar fetchCharacters={fetchCharacters} />
            <Pagination totalPages={totalPages} />
            <CardSection 
              characters={characters} 
              visibleModal={visibleModal}
              openModal={openModal}
              closeModal={closeModal} 
              selectedCharacter={selectedCharacter} 
              error={error} 
            />
        </section>
    )
}


export default Home;