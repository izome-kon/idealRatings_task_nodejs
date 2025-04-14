import { Request, Response } from 'express';
import { PersonFilter } from '../types';
import { personService } from '../container';
import { errorResponse, successResponse } from '../utils/response';

/**
 * Handles the request to retrieve all persons, optionally filtering by name and country.
 *
 * @param req - The request object containing query parameters for filtering.
 * @param res - The response object used to return the list of persons or an error.
 * @returns A JSON response with the list of persons or an error message.
 */
export const getAllPersons = async (req: Request, res: Response) => {
    const filter: PersonFilter = req.query;

    try {
        const persons = await personService.getAllPersons(filter);
        return successResponse(res, persons);
    } catch (error) {
        console.error('Error fetching persons:', error);
        return errorResponse(res, 'Failed to fetch persons');
    }
};