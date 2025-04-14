import { PersonFilter, PersonResponse } from "../../types";

export default interface IPersonRepository {
    getPersons(filter?: PersonFilter): Promise<PersonResponse[]>;
}
