import mongoose, { Document, Schema } from 'mongoose';
import { PersonMongo } from '../types';

/**
 * Defines the schema for a PersonMongo document in the MongoDB database.
 *
 * Properties:
 * - `name` (string): The name of the person. This field is required.
 * - `telephoneNumber` (string): The telephone number of the person. This field is required.
 * - `address` (string): The address of the person. This field is required.
 * - `country` (string): The country of the person. This field is required.
 */
const personSchema: Schema = new Schema<PersonMongo>(
    {
        name: { type: String, required: true },
        telephoneNumber: { type: String, required: true },
        address: { type: String, required: true },
        country: { type: String, required: true },
    },
);

export const PersonMongoModel =
    mongoose.models.PersonMongo || mongoose.model('PersonMongo', personSchema);