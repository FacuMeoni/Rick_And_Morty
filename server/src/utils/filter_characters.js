import { Op } from "sequelize";


export const filterCharacters = ({ status, gender, species, origin, name }) => {
    let where = {};

    if(name)where.name = []
    if(status) where.status = { [Op.iLike] : `%${status}%`}
    if(name) where.name = { [Op.iLike] : `%${name}%`}
    if(gender) where.gender = { [Op.iLike] : `%${gender}%`}
    if(species) where.species = { [Op.iLike] : `%${species}%`}
    if(origin) where.origin = { [Op.iLike] : `%${origin}%`}

    return where
}