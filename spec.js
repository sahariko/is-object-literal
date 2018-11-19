import { isObjectLiteral } from '.';

class Test {}

describe('isObjectLiteral', () => {
    it('Returns true for plain objects', () => {
        expect(isObjectLiteral({})).toBeTruthy();
    });

    it('Returns false for non objects', () => {
        const nonObjectTypes = [
            true,
            false,
            1,
            'string',
            '[object Object]',
            [],
            new Set(),
            new Map(),
            new Test(),
            null,
        ];

        nonObjectTypes.forEach((value) => {
            expect(isObjectLiteral(value)).toBeFalsy();
        });
    });
});
