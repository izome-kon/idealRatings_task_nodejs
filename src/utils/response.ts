import { Response } from 'express';

export const successResponse = (res: Response, data: any, message?: string) => {
    res.status(200).json({
        success: true,
        data,
        message,
    });
}

export const errorResponse = (res: Response, message: string, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
}