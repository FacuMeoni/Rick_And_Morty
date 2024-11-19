import { Op } from "sequelize";


export const filterCharacters = ({ status, gender, species, origin, name }) => {
    let where = {};
    
    if(status) where.status = status
    if(name) where.name = { [Op.iLike] : `%${name}%`}
    if(gender) where.gender = gender
    if(species) where.species = { [Op.iLike] : `%${species}%`}
    if(origin) where.origin = { [Op.iLike] : `%${origin}%`}

    return where
}