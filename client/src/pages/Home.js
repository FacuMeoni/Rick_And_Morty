import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "../components/Pagination";


function Home () {
    const { characters, page, goToPage, fetchCharacters } = useCharacters();

    return (
        <section>
            <h1> 
                home page
            </h1>
            <Navbar fetchCharacters={fetchCharacters} />
            <Pagination totalPages={page.totalPages} currentPage={page.currentPage} goToPage={goToPage}/>
            <CardSection characters={characters} />
        </section>
    )
}


export default Home;