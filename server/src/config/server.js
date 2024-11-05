import express from 'express';
import { config } from 'dotenv';
config();
import morgan from 'morgan';
import characterRouter from '../routes/characters_routes.js';
import { errHandler } from '../middlewares/err_handler.js';
import { corsMiddleware } from '../middlewares/cors.js';

const server = express();
const acceptedOrigins = process.env.ACCEPTED_ORIGINS || {};

server.use(express.json());
server.use(morgan('dev'));
server.use(corsMiddleware(acceptedOrigins));
server.use('/characters', characterRouter);
server.use(errHandler);
server.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'Route not found.'
    });
});

export default server;