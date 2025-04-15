import { mapMongoRowToPerson } from "../../src/mappers";
import { PersonMongo, PersonResponse } from "../../src/types";

describe('mapMongoRowToPerson', () => {
    it('should correctly map a full Mongo person to PersonResponse', () => {
        const mongoPerson: PersonMongo = {
            name: 'Ahmed Ali',
            telephoneNumber: '20-123456789',
            address: 'Cairo',
            country: 'Egypt'
        };

        const result: PersonResponse = mapMongoRowToPerson(mongoPerson);

        expect(result).toEqual({
            "first name": "Ahmed",
            "last name": "Ali",
            "telephone code": "20",
            "telephone number": "123456789",
            address: "Cairo",
            country: "Egypt"
        });
    });

    it('should handle missing last name correctly', () => {
        const mongoPerson: PersonMongo = {
            name: 'Ahmed',
            telephoneNumber: '966-987654321',
            address: 'Riyadh',
            country: 'Saudi Arabia'
        };

        const result = mapMongoRowToPerson(mongoPerson);

        expect(result).toEqual({
            "first name": "Ahmed",
            "last name": "",
            "telephone code": "966",
            "telephone number": "987654321",
            address: "Riyadh",
            country: "Saudi Arabia"
        });
    });
});