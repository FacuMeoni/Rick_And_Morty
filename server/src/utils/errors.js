export class AppError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
        this.name = this.constructor.name
    }
}

export class ValidationError extends AppError {
    name = 'Validation Error';
    constructor(message){
        super(message, 400)
    }
}

export class NotFoundError extends AppError {
    name = 'Not found Error';
    constructor (message) {
        super(message, 404);
    }
}