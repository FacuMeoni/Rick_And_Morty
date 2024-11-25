import { PORT } from "./src/config/variables_provider.js";
import server from "./src/config/server.js";
import sequelize from "./src/config/database.js";
import { saveDBCharacters } from "./src/services/characters_services.js";
import './src/models/characters.js';

server.listen(PORT, async() => {
    try {
        console.log(`Server running ok: "http://localhost:${PORT}"`);
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        
        await saveDBCharacters();

        await sequelize.sync({ force: false });
        console.log("Database synced correctlly.");
    
    } catch (error) {
            console.error('Unable to connect to the database', error);
    }
})

