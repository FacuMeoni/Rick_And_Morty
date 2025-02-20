import express from 'express';
import morgan from 'morgan';
import characterRouter from '../routes/characters_routes.js';
import { errHandler } from '../middlewares/err_handler.js';
import { corsMiddleware } from '../middlewares/cors.js';
import { ACCEPTED_ORIGINS } from './variables_provider.js';

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(corsMiddleware(ACCEPTED_ORIGINS));
server.use('/characters', characterRouter);
server.use('/', (req,res) => {
    res.json({
        characters: "https://rick-andmorty.up.railway.app/characters"
    })
})
server.use(errHandler);
server.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'Route not found.'
    });
});

export default server;