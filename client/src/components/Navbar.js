function Navbar ({ fetchCharacters }) {

    return (
        <nav>
            <button onClick={() => fetchCharacters()}> Reset </button>
        </nav>
    )
}


export default Navbar;