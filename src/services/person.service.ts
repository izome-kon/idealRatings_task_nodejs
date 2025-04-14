import IPersonRepository from "../repositories/personRepository/IPersonRepository";
import { PersonFilter, PersonResponse } from "../types";

export class PersonService {
    constructor(private personRepositories: IPersonRepository[]) { }

    async getAllPersons(filters: PersonFilter): Promise<PersonResponse[]> {
        let data: PersonResponse[] = [];
        for (const personRepository of this.personRepositories) {
            const persons = await personRepository.getPersons(filters);
            data.push(...persons);
        }
        return data;
    }
}