import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "../components/Pagination/Pagination";


function Home () {
    const { characters, page, goToPage, fetchCharacters } = useCharacters();

    return (
        <section>
            <Navbar fetchCharacters={fetchCharacters} />
            <Pagination totalPages={page.totalPages} currentPage={page.currentPage} goToPage={goToPage}/>
            <CardSection characters={characters} />
        </section>
    )
}


export default Home;