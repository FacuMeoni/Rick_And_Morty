import { AppError } from "../utils/errors.js"

export const errHandler = (err, req, res, next) => {

    
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            type: err.name,
            message: err.message
        })
    }

    return res.status(500).json({
        success: false,
        type: 'Internal Error',
        message: 'Internal error, please try later.'
    })
}