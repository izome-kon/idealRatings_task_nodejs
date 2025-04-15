import mockFs from 'mock-fs';
import { CsvPersonRepository } from '../../src/repositories/personRepository/CsvPersonRepository';
import { CSV_PERSONS_PATH } from '../../src/constants/paths';
import { PersonFilter } from '../../src/types';

describe('CsvPersonRepository - getPersons', () => {
    const csvRepo = new CsvPersonRepository();

    const mockCsvData = `
First Name,Last Name,Country code,Number,Full Address
Ahmed,Ali,+20,123456789,"Cairo,Egypt"
Sara,Youssef,+20,987654321,"Giza,Egypt"
John,Doe,+1,555555555,"New York,USA"
  `.trim();

    beforeEach(() => {
        mockFs({
            [CSV_PERSONS_PATH]: mockCsvData
        });
    });

    afterEach(() => {
        mockFs.restore();
    });

    it('should return all persons if no filter is applied', async () => {
        const result = await csvRepo.getPersons();
        expect(result.length).toBe(3);
        expect(result[0]['first name']).toBe('Ahmed');
    });

    it('should return filtered persons based on country', async () => {
        const filter: PersonFilter = { country: 'Egypt' };
        const result = await csvRepo.getPersons(filter);
        expect(result.length).toBe(2);
        expect(result.every(p => p.country.includes('Egypt'))).toBe(true);
    });

    it('should return empty array if no match found', async () => {
        const filter: PersonFilter = { country: 'Japan' };
        const result = await csvRepo.getPersons(filter);
        expect(result).toEqual([]);
    });
});