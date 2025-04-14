import { mapMongoRowToPerson } from "../../mappers";
import { PersonMongoModel } from "../../models";
import { PersonFilter, PersonResponse } from "../../types";
import IPersonRepository from "./IPersonRepository";

export class MongoPersonRepository implements IPersonRepository {
    async getPersons(filter?: PersonFilter): Promise<PersonResponse[]> {
        const query: any = {};
        if (filter?.country) {
            query.country = filter.country;
        }
        if (filter?.name) {
            query.name = { $regex: new RegExp(filter.name, 'i') };
        }

        const people = await PersonMongoModel.find(query);
        return people.map((person) => mapMongoRowToPerson(person));
    }
}