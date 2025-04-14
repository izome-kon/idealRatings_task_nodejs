import { PersonFilter, PersonResponse } from "../types";



/**
 * Checks if a PersonResponse object matches the provided filter criteria.
 *
 * @param person - The PersonResponse object to be checked against the filter criteria.
 * @param filter - The filter criteria. If no filter is provided, the function returns true.
 *
 * @returns true if the person matches the filter criteria, false otherwise.
 */
export const matchPersonFilter = (person: PersonResponse, filter?: PersonFilter): boolean => {
    if (!filter) return true;

    // Define mapping between filter fields and person fields
    const fieldMapping: Record<keyof PersonFilter, (person: PersonResponse) => string> = {
        name: (p) => `${p["first name"]} ${p["last name"]}`,
        country: (p) => p.country
    };

    for (const key of Object.keys(filter) as (keyof PersonFilter)[]) {
        const filterValue = filter[key];
        const getPersonField = fieldMapping[key];
        const personFieldValue = getPersonField(person);

        if (
            filterValue &&
            !personFieldValue.toLowerCase().includes(filterValue.toLowerCase())
        ) {
            return false;
        }
    }

    return true;
};


/**
 * Builds a MongoDB filter object based on the provided filter criteria.
 *
 * @param filter - Optional filter criteria to build the MongoDB filter from.
 *                 If no filter is provided, the function returns an empty object.
 *
 * @returns A MongoDB filter object with the specified query parameters.
 */
export const buildMongoFilter = (filter?: PersonFilter): Record<string, any> => {
    const query: any = {};

    if (!filter) return query;

    for (const key of Object.keys(filter)) {
        const value = filter[key as keyof PersonFilter];

        if (!value) continue;

        query[key] = key === "name"
            ? { $regex: new RegExp(value, 'i') }
            : value;
    }

    return query;
};