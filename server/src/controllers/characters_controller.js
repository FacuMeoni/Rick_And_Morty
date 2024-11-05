import { Character } from '../models/characters.js';
import { filterCharacters } from '../utils/filter_characters.js';
import { pagination } from '../utils/pagination.js';
import { NotFoundError, ValidationError } from '../utils/errors.js';

export const getAllCharacters = async(req, res) => {

    const { page = 1, status, gender, origin, species, name } = req.query;
    const where = filterCharacters({ status, gender, origin, species, name })
    const totalCharacters = await Character.count({ where });
    const { limit, offset, totalPages } = pagination(totalCharacters, page);
    const characters = await Character.findAll({
        limit, offset, where
    })

    if(characters.length === 0)throw new NotFoundError("No characters found matching the criteria.");
    
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

    if(!id || isNaN(id))throw new ValidationError("Please send a valid id.");

    const character = await Character.findByPk(id);

    if(!character)throw new NotFoundError(`Not character found with ID ${id}, please send an id between 1 and 826`);

    return res.status(200).json({
        success: true,
        character
    })
}
