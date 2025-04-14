import { PersonMongo, PersonResponse } from "../../types";

/**
 * The function takes a PersonMongo object as an argument and returns a PersonResponse object.
 * @param {PersonMongo} mongoPerson - The PersonMongo object to be mapped to a PersonResponse object.
 * @return {PersonResponse} The mapped PersonResponse object.
 */
export function mapMongoRowToPerson(mongoPerson: PersonMongo): PersonResponse {
    const [code, number] = mongoPerson.telephoneNumber.split('-');
    return {
        "first name": mongoPerson.name?.split(' ')[0],
        "last name": mongoPerson.name?.split(' ')[1] || '',
        "telephone code": code,
        "telephone number": number,
        address: mongoPerson.address,
        country: mongoPerson.country,
    }
}