import express from 'express';
import morgan from 'morgan';
import characterRouter from '../routes/characters_routes.js';

const server = express();

server.use(express.json());
ser

server.use(characterRouter);

export default server;