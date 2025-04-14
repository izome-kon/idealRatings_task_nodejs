import IPersonRepository from "../repositories/personRepository/IPersonRepository";
import { PersonFilter, PersonResponse } from "../types";

/**
 * Service class responsible for managing operations related to persons.
 */
export class PersonService {
    constructor(private personRepositories: IPersonRepository[]) { }

    /**
     * Retrieves a list of PersonResponse objects from all person repositories based on the provided filter.
     *
     * @param filters - An optional filter object to narrow down the search results.
     *
     * @returns A promise that resolves to an array of PersonResponse objects.
     *
     * @throws {Error} If there is an issue with the repositories or mapping the results.
     */
    async getAllPersons(filters: PersonFilter): Promise<PersonResponse[]> {
        let data: PersonResponse[] = [];
        for (const personRepository of this.personRepositories) {
            const persons = await personRepository.getPersons(filters);
            data.push(...persons);
        }
        return data;
    }
}