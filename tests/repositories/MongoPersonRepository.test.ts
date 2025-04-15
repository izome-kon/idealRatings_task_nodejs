import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { MongoPersonRepository } from '../../src/repositories';
import { PersonMongoModel } from '../../src/models';

let mongoServer: MongoMemoryServer;
const repo = new MongoPersonRepository();

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
        dbName: 'test-db',
    });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    await PersonMongoModel.deleteMany({});

    await PersonMongoModel.create([
        {
            name: 'Ahmed Ali',
            telephoneNumber: '+20-123456789',
            address: 'Cairo',
            country: 'Egypt',
        },
        {
            name: 'Sara Youssef',
            telephoneNumber: '+20-987654321',
            address: 'Giza',
            country: 'Egypt',
        },
        {
            name: 'John Doe',
            telephoneNumber: '+1-555555555',
            address: 'New York',
            country: 'USA',
        },
    ]);
});

describe('MongoPersonRepository - getPersons', () => {
    it('should return all persons when no filter is provided', async () => {
        const result = await repo.getPersons();
        expect(result.length).toBe(3);
    });

    it('should filter by country', async () => {
        const result = await repo.getPersons({ country: 'Egypt' });
        expect(result.length).toBe(2);
        expect(result.every(p => p.country === 'Egypt')).toBe(true);
    });

    it('should filter by name (case insensitive)', async () => {
        const result = await repo.getPersons({ name: 'ahmed' });
        expect(result.length).toBe(1);
        expect(result[0]['first name']).toBe('Ahmed');
    });

    it('should return empty array if no match', async () => {
        const result = await repo.getPersons({ name: 'Nonexistent' });
        expect(result).toEqual([]);
    });

    it('should throw error if query fails', async () => {
        // Inject invalid model behavior (simulate failure)
        const originalFind = PersonMongoModel.find;
        (PersonMongoModel.find as any) = () => {
            throw new Error('Boom!');
        };

        await expect(repo.getPersons()).rejects.toThrow('Failed to fetch persons');

        // Restore
        PersonMongoModel.find = originalFind;
    });
});