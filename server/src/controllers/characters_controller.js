import { Character } from '../models/characters.js';
import { filterCharacters } from '../utils/filter_characters.js';
import { pagination } from '../utils/pagination.js';

export const getAllCharacters = async(req, res) => {

    const { page = 1, status, gender, origin, species, name } = req.query;
    const where = filterCharacters({ status, gender, origin, species, name })
    const totalCharacters = await Character.count({ where });
    const { limit, offset, totalPages } = pagination(totalCharacters, page);
    const characters = await Character.findAll({
        limit, offset, where
    })

    if(characters.length === 0){
        console.log('error while getting character of DB');
        return
    }
    
    return res.status(200).json({
        succcess: true,
        info: {
            totalPages,
            currentPage: page,
            count: totalCharacters
        },
        characters
    });
}

export const getCharacterById = async(req, res) => {
    const { id } = req.params;

    if(!id || isNaN(id)){
        console.log("Please send an invalid id")
        return;
    }

    const character = await Character.findByPk(id);

    if(!character){
        console.log(`Dont found any character with ID ${id}, please send between 1 and 826`);
        return;
    }

    return res.status(200).json({
        success: true,
        character
    })
}
