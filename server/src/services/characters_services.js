import axios from "axios";
const url_api = 'https://rickandmortyapi.com/api/character?page='
import { Character } from "../models/characters.js";


export const fetchAllCharacters = async() => {
   let characters = [];
   let page = 1;

    while(page < 43 ){
        await axios.get(`${url_api}${page}`)
        .then( response => response.data )
        .then(data => data.results.forEach(character => {
            characters.push({
                id: character.id,
                name: character.name,
                image: character.image,
                status: character.status,
                origin: character.origin?.name,
                species: character.species,
                gender: character.gender
            })
        }))
        .catch(error => {
            console.error("Error fetching characters", error)
        })
        .finally(() => page += 1);
    }

    return characters;
}

export const saveDBCharacters = async() => {
    const characters = await fetchAllCharacters();
    const totalCharacters = await Character.count();

    if(characters.length === 0)console.log("Error fetching characters");
    if(totalCharacters > 0 || totalCharacters === 826){
        console.log(`${totalCharacters} characters already saved`);
        return;
    }

    await Character.bulkCreate(characters);
    
    console.log(`${characters.length} characters saved correctly.`)
    return; 
}
