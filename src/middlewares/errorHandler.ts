import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    status?: number;
}
const errorHandelr = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Something went wrong'
    })
}

export default errorHandelr;