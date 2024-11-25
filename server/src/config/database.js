import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from './variables_provider.js';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false
});

export default sequelize;