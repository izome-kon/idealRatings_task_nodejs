import { PersonService } from "../../src/services/person.service";
import IPersonRepository from "../../src/repositories/personRepository/IPersonRepository";
import { PersonFilter, PersonResponse } from "../../src/types";

describe('PersonService - getAllPersons', () => {
    const mockRepo1: IPersonRepository = {
        getPersons: jest.fn()
    };

    const mockRepo2: IPersonRepository = {
        getPersons: jest.fn()
    };

    const service = new PersonService([mockRepo1, mockRepo2]);

    const mockFilter: PersonFilter = { country: 'Egypt' };

    const repo1Data: PersonResponse[] = [
        {
            "first name": "Ahmed",
            "last name": "Ali",
            "telephone code": "+20",
            "telephone number": "123456789",
            address: "Cairo",
            country: "Egypt"
        }
    ];

    const repo2Data: PersonResponse[] = [
        {
            "first name": "Sara",
            "last name": "Youssef",
            "telephone code": "+20",
            "telephone number": "987654321",
            address: "Giza",
            country: "Egypt"
        }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return combined results from all repositories', async () => {
        (mockRepo1.getPersons as jest.Mock).mockResolvedValue(repo1Data);
        (mockRepo2.getPersons as jest.Mock).mockResolvedValue(repo2Data);

        const result = await service.getAllPersons(mockFilter);

        expect(result).toEqual([...repo1Data, ...repo2Data]);
        expect(mockRepo1.getPersons).toHaveBeenCalledWith(mockFilter);
        expect(mockRepo2.getPersons).toHaveBeenCalledWith(mockFilter);
    });

    it('should return empty array if all repositories return empty', async () => {
        (mockRepo1.getPersons as jest.Mock).mockResolvedValue([]);
        (mockRepo2.getPersons as jest.Mock).mockResolvedValue([]);

        const result = await service.getAllPersons(mockFilter);

        expect(result).toEqual([]);
    });

    it('should throw error if one repository fails', async () => {
        (mockRepo1.getPersons as jest.Mock).mockResolvedValue(repo1Data);
        (mockRepo2.getPersons as jest.Mock).mockRejectedValue(new Error('Repo failed'));

        await expect(service.getAllPersons(mockFilter)).rejects.toThrow('Repo failed');
    });
});