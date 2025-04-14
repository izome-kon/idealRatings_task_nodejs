import { PersonFilter, PersonResponse } from "../../types";

/**
 * Interface representing a repository for managing person-related data.
 */
export default interface IPersonRepository {
    /**
     * Retrieves a list of persons based on the provided filter criteria.
     *
     * @param filter - Optional filter criteria to narrow down the list of persons.
     * @returns A promise that resolves to an array of person responses.
     */
    getPersons(filter?: PersonFilter): Promise<PersonResponse[]>;
}
