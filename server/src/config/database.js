import { config } from 'dotenv';
config();
import { Sequelize } from "sequelize";
const { DB, DB_USER, DB_PASS, DB_HOST} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB}`, {
    logging: false
});

export default sequelize;