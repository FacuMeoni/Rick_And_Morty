import server from "./src/config/server.js";
import sequelize from "./src/config/database.js";
import { saveDBCharacters } from "./src/services/characters_services.js";
import './src/models/characters.js';

server.listen(3000, async() => {
    try {
        console.log("server running on port 3000");
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        
        //await saveDBCharacters(); --> Uncomment to save characters on DB.

        await sequelize.sync({ force: false });
        console.log("Database synced correctlly.");

    } catch (error) {
            console.error('Unable to connect to the database', error);
    }
})

