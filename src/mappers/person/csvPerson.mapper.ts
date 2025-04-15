import { PersonResponse } from "../../types";

export interface CsvRow {
    "First Name": string;
    "Last Name": string;
    "Country code": string;
    "Number": string;
    "Full Address": string;
}
/**
 * The function takes a row as an argument, and returns a PersonResponse object.
 * @param row - The row from the CSV file to be mapped to a PersonResponse.
 * @return A PersonResponse object with the mapped values.
 */
export function mapCsvRowToPerson(row: CsvRow): PersonResponse {
    const fullAddrss = row["Full Address"] || '';
    let address = '';
    let country = '';

    if (fullAddrss.includes(',')) {
        const [addressPart, countryPart] = fullAddrss.split(',');
        address = addressPart.trim();
        country = countryPart.trim();
    } else {
        address = fullAddrss;
    }

    return {
        "first name": row["First Name"],
        "last name": row["Last Name"],
        "telephone code": row["Country code"],
        "telephone number": row["Number"],
        "address": address,
        "country": country,
    };
}