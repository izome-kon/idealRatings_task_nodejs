import { CsvRow, mapCsvRowToPerson } from "../../src/mappers";

describe('mapCsvRowToPerson', () => {
    it('should map CSV row to person response correctly with full address', () => {
        const row: CsvRow = {
            "First Name": "Ahmed",
            "Last Name": "Ali",
            "Country code": "20",
            "Number": "123456789",
            "Full Address": "Cairo, Egypt"
        };

        const result = mapCsvRowToPerson(row);

        expect(result).toEqual({
            "first name": "Ahmed",
            "last name": "Ali",
            "telephone code": "20",
            "telephone number": "123456789",
            "address": "Cairo",
            "country": "Egypt"
        });
    });

    it('should return empty address and country if Full Address is missing', () => {
        const row: CsvRow = {
            "First Name": "Mona",
            "Last Name": "Khaled",
            "Country code": "971",
            "Number": "987654321",
            "Full Address": ""
        };

        const result = mapCsvRowToPerson(row);

        expect(result).toEqual({
            "first name": "Mona",
            "last name": "Khaled",
            "telephone code": "971",
            "telephone number": "987654321",
            "address": "",
            "country": ""
        });
    });

    it('should return empty country if Full Address has no comma', () => {
        const row: CsvRow = {
            "First Name": "Salma",
            "Last Name": "Hassan",
            "Country code": "+966",
            "Number": "1029384756",
            "Full Address": "Riyadh"
        };

        const result = mapCsvRowToPerson(row);

        expect(result).toEqual({
            "first name": "Salma",
            "last name": "Hassan",
            "telephone code": "+966",
            "telephone number": "1029384756",
            "address": "Riyadh",
            "country": ""
        });
    });
});