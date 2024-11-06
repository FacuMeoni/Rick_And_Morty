import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import { useCharacters } from "../hooks/useCharacters";
import Pagination from "../components/Pagination";


function Home () {
    const { characters, error, setPage, page, goToPage} = useCharacters();

    return (
        <section>
            <h1> 
                home page
            </h1>
            <Navbar page={page} setPage={setPage} />
            <Pagination totalPages={page.totalPages} currentPage={page.currentPage} goToPage={goToPage}/>
            <CardSection characters={characters} />
        </section>
    )
}


export default Home;