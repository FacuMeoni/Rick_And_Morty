import express from 'express';
import morgan from 'morgan';
import characterRouter from '../routes/characters_routes.js';
import { errHandler } from '../middlewares/err_handler.js';

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use('/characters', characterRouter);
server.use(errHandler)
server.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'Route not found.'
    })
});

export default server;