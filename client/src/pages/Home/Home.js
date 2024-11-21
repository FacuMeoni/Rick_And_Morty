import './home.css'
import Navbar from "../../components/Navbar/Navbar";
import CardSection from "../../components/Cards/CardSection";
import { useCharacters } from "../../hooks/useCharacters";
import Pagination from "../../components/Pagination/Pagination";
import { useModal } from "../../hooks/useModal";

function Home () {

    const { characters, totalPages, fetchCharacters, error } = useCharacters();
    const { visibleModal, openModal, closeModal, selectedCharacter } = useModal();

    return (
        <section className="home-container">
            <header className="home-header"> 
                <Navbar fetchCharacters={fetchCharacters} />
            </header>

            <main className="home-main"> 
                <CardSection 
                characters={characters} 
                visibleModal={visibleModal}
                openModal={openModal}
                closeModal={closeModal} 
                selectedCharacter={selectedCharacter} 
                error={error} 
                />
            </main>

            <footer className="home-footer">
                <Pagination totalPages={totalPages} error={error} />
            </footer>
        </section>
    )
}


export default Home;