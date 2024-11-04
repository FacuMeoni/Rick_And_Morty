export const pagination = (totalCharacters, page) => {
    const limit = 20;
    const totalPages = Math.ceil(totalCharacters/limit);
    let offset = 0;

    if(page){
        if(page < 1 || isNaN(page) || page > totalPages){
            console.log(`Please send a valid page, between 1 and ${totalPages}`);
            return
        }
        offset = (page - 1) * limit;
    }

    return { limit, offset, totalPages }
}