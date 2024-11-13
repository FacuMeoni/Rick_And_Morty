import Navbar from "../components/Navbar";
import CardSection from "../components/Cards/CardSection";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "../components/Pagination/Pagination";
import { useModal } from "../hooks/useModal";

function Home () {
    const { characters, totalPages, fetchCharacters } = useCharacters();
    const { visibleModal, openModal, closeModal, selectedCharacter } = useModal();

    return (
        <section>
            <Navbar fetchCharacters={fetchCharacters} />
            <Pagination totalPages={totalPages} />
            <CardSection characters={characters} visibleModal={visibleModal} openModal={openModal} closeModal={closeModal} selectedCharacter={selectedCharacter}/>
        </section>
    )
}


export default Home;