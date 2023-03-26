import { hasNodeModule } from './node';

describe(hasNodeModule, () => {
    describe('when module is installed in node_modules', () => {
        it('returns true', () => {
            expect(hasNodeModule('typescript')).toBe(true);
            expect(hasNodeModule('jest')).toBe(true);
        });
    });

    describe('when module is not installed in node_modules', () => {
        it('returns false', () => {
            expect(hasNodeModule('javascript')).toBe(false);
        });
    });
});
