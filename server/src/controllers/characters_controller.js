import { Character } from '../models/characters.js';
import { filterCharacters } from '../utils/filter_characters.js';
import { pagination } from '../utils/pagination.js';

export const getAllCharacters = async(req, res) => {

    const { page = 1, status, gender, origin, species } = req.query;
    const where = filterCharacters({ status, gender, origin, species })
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
        info: {
            totalPages,
            currentPage: page,
            count: totalCharacters
        },
        characters
    });
}


