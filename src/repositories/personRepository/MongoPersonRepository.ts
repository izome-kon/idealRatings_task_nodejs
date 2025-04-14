import { mapMongoRowToPerson } from "../../mappers";
import { PersonMongoModel } from "../../models";
import { PersonFilter, PersonResponse } from "../../types";
import IPersonRepository from "./IPersonRepository";

/**
 * A repository implementation for managing person data in a MongoDB database.
 * This class provides methods to retrieve person records based on optional filters.
 *
 * @implements {IPersonRepository}
 */
export class MongoPersonRepository implements IPersonRepository {
    /**
    * Retrieves a list of persons from the MongoDB database based on the provided filter.
    *
    * @param {PersonFilter} [filter] - An optional filter object to narrow down the search results.
    *
    * @returns {Promise<PersonResponse[]>} A promise that resolves to an array of person responses.
    *
    * @throws {Error} If there is an issue with the database query or mapping the results.
    */
    async getPersons(filter?: PersonFilter): Promise<PersonResponse[]> {
        const query: any = {};
        if (filter?.country) {
            query.country = filter.country;
        }
        if (filter?.name) {
            query.name = { $regex: new RegExp(filter.name, 'i') };
        }

        try {
            const people = await PersonMongoModel.find(query);
            return people.map((person) => mapMongoRowToPerson(person));
        } catch (error) {
            throw new Error('Failed to fetch persons');
        }
    }
}