import { Character } from '../models/characters.js';

export const getAllCharacters = async(req, res) => {
    const characters = await Character.findAll();


    if(characters.length === 0){
        console.log('error while getting character of DB');
        return
    }
    
    return res.status(200).json(characters);
}