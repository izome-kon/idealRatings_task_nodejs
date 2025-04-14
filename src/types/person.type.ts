export interface PersonResponse {
    "first name": string;
    "last name": string;
    "telephone code": string;
    "telephone number": string;
    "address": string;
    "country": string;
}

export type PersonFilter = {
    name?: string;
    country?: string;
}

export interface PersonMongo {
    name: string;
    telephoneNumber: string;
    address: string;
    country: string;
}