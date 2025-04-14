import { PersonMongo, PersonResponse } from "../../types";

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