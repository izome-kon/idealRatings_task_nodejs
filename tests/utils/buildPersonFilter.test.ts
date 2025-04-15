import { PersonFilter } from "../../src/types";
import { buildMongoFilter } from "../../src/utils/buildPersonFilter";

describe('buildMongoFilter', () => {
    it('should return empty object if no filter is provided', () => {
        const result = buildMongoFilter();
        expect(result).toEqual({});
    });

    it('should ignore empty values in the filter', () => {
        const filter: PersonFilter = {
            name: '',
            country: undefined,
        };

        const result = buildMongoFilter(filter);
        expect(result).toEqual({});
    });

    it('should build regex for name key', () => {
        const filter: PersonFilter = {
            name: 'Ali'
        };

        const result = buildMongoFilter(filter);

        expect(result).toEqual({
            name: { $regex: new RegExp('Ali', 'i') }
        });
    });

    it('should include normal key-value pairs as is', () => {
        const filter: PersonFilter = {
            country: 'Egypt',
        };

        const result = buildMongoFilter(filter);

        expect(result).toEqual({
            country: 'Egypt',
        });
    });

    it('should handle mixed keys (name + others)', () => {
        const filter: PersonFilter = {
            name: 'Ahmed',
            country: 'UAE'
        };

        const result = buildMongoFilter(filter);

        expect(result).toEqual({
            name: { $regex: new RegExp('Ahmed', 'i') },
            country: 'UAE'
        });
    });
});