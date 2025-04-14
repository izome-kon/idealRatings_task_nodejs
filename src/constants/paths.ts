import path from "path";

/**
 * The file path to the CSV file containing person data.
 * This path is resolved relative to the current directory of the module.
 */
export const CSV_PERSONS_PATH = path.resolve(__dirname, '../data/person.csv');