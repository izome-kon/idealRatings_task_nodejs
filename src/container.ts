import { CsvPersonRepository, MongoPersonRepository } from "./repositories";
import { PersonService } from "./services/person.service";

const personRepositories = [
    new CsvPersonRepository(),
    new MongoPersonRepository()
];

export const personService = new PersonService(personRepositories);