import { Response } from 'express';

/**
 * Sends a JSON response with a success status.
 *
 * @param res - The Express response object used to send the response.
 * @param data - The data to be included in the response body.
 * @param message - An optional message to be included in the response body.
 */

export const successResponse = (res: Response, data: any, message?: string) => {
    res.status(200).json(data);
}

/**
 * Sends a JSON response with an error status.
 *
 * @param res - The Express response object used to send the response.
 * @param message - The error message to be included in the response body.
 * @param statusCode - The HTTP status code for the error response. Defaults to 500.
 */

export const errorResponse = (res: Response, message: string, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
}