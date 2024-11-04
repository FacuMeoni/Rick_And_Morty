export const filterCharacters = ({ status, gender, species, origin }) => {
    let where = {};

    if(status) where.status = status;
    if(gender) where.gender = gender
    if(species) where.species = species
    if(origin) where.origin = origin

    return where
}