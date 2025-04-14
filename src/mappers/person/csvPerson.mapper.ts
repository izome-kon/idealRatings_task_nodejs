import { PersonResponse } from "../../types";

interface CsvRow {
    "First Name": string;
    "Last Name": string;
    "Country code": string;
    "Number": string;
    "Full Address": string;
}
export function mapCsvRowToPerson(row: CsvRow): PersonResponse {
    const fullAddrss = row["Full Address"] || '';
    let address = '';
    let country = '';

    if (fullAddrss.includes(',')) {
        const [addressPart, countryPart] = fullAddrss.split(',');
        address = addressPart;
        country = countryPart;
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