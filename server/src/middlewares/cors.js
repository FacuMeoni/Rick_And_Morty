import cors from 'cors';

export const corsMiddleware = ( acceptedOrigins = {} ) => cors({
    origin: (origin, callback) => {
        if(!origin || acceptedOrigins.includes(origin)) {
            return callback(null, true);
        } else  {
            return callback(new Error(`Origin ${origin} not allowed by Cors`));
        }
    },
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-type', 'Authorization']
});