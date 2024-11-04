import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const Character = sequelize.define(
    'Character', 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
        allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
        allowNull: false
    },
    origin: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
            message: 'Image must be an url'
        }
    },
}, { timestamps: false })