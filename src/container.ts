import { CsvPersonRepository, MongoPersonRepository } from "./repositories";
import { PersonService } from "./services/person.service";

/**
 * An array of person repository instances used to manage and retrieve person data.
 *
 * This array includes:
 * - `CsvPersonRepository`: A repository implementation that handles person data stored in CSV files.
 * - `MongoPersonRepository`: A repository implementation that handles person data stored in a MongoDB database.
 */
const personRepositories = [
    new CsvPersonRepository(),
    new MongoPersonRepository()
];


/**
 * An instance of the `PersonService` class, initialized with the required
 * `personRepositories`. This service is responsible for handling operations
 * related to person entities.
 */
export const personService = new PersonService(personRepositories);