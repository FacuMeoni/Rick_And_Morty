import express from 'express';
import morgan from 'morgan';
import characterRouter from '../routes/characters_routes.js';

const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.use('/characters', characterRouter);



export default server;