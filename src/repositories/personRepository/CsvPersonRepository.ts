import path, { resolve } from "path";
import { PersonResponse } from "../../types";
import fs from "fs";
import csvParser from "csv-parser";
import { mapCsvRowToPerson } from "../../mappers";
import { CSV_PERSONS_PATH } from "../../constants/paths";
import IPersonRepository from "./IPersonRepository";
export class CsvPersonRepository implements IPersonRepository {
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