import path, { resolve } from "path";
import { PersonResponse } from "../../types";
import fs from "fs";
import csvParser from "csv-parser";
import { mapCsvRowToPerson } from "../../mappers";
import { CSV_PERSONS_PATH } from "../../constants/paths";
import IPersonRepository from "./IPersonRepository";

/**
 * A repository implementation for managing and retrieving person data from a CSV file.
 * This class implements the `IPersonRepository` interface and provides functionality
 * to read and parse person data stored in a CSV file.
 *
 * @implements {IPersonRepository}
 */
export class CsvPersonRepository implements IPersonRepository {
    /**
     * Retrieves a list of PersonResponse objects from a CSV file.
     *
     * @returns A Promise that resolves with an array of PersonResponse objects.
     *          If there is an error while reading the CSV file, the Promise will be rejected with the error.
     */
    getPersons(): Promise<PersonResponse[]> {
        return new Promise((resolve, reject) => {
            const results: PersonResponse[] = [];
            fs.createReadStream(CSV_PERSONS_PATH)
                .pipe(csvParser())
                .on('data', (data) => {
                    results.push(mapCsvRowToPerson(data));
                })
                .on('end', () => {
                    resolve(results);
                })
                .on('error', (error) => {
                    console.error('Error reading CSV file:', error);
                    reject(error);
                });
        })
    }
}