import mongoose, { Document, Schema } from 'mongoose';
import { PersonMongo } from '../types';

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