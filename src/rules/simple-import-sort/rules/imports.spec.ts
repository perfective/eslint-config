import { internalPackages, scopedPackages, simpleImportSortImports } from './imports';

describe(simpleImportSortImports, () => {
    it('creates default configuration', () => {
        expect(simpleImportSortImports())
            .toStrictEqual({
                groups: [
                    ['^\\u0000'],
                    ['^node:'],
                    ['^[a-zA-Z]'],
                    ['^@'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    ['^.+\\.s?css$'],
                ],
            });
    });

    it('creates configuration with internal scope packages groups', () => {
        expect(simpleImportSortImports(['@angular', '@rxjs', '@perfective']))
            .toStrictEqual({
                groups: [
                    ['^\\u0000'],
                    ['^node:'],
                    ['^[a-zA-Z]'],
                    ['^(?!@angular|@rxjs|@perfective)@'],
                    ['^@angular'],
                    ['^@rxjs'],
                    ['^@perfective'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    ['^.+\\.s?css$'],
                ],
            });
    });
});

describe(scopedPackages, () => {
    it('lists all scoped packages as external when no internal packages are given', () => {
        expect(scopedPackages([]))
            .toStrictEqual(['^@']);
    });

    it('excludes all internal scoped packages preserving order', () => {
        expect(scopedPackages(['@angular', '@rxjs', '@perfective']))
            .toStrictEqual(['^(?!@angular|@rxjs|@perfective)@']);
    });
});

describe(internalPackages, () => {
    it('lists all internal scopes as separate packages', () => {
        expect(internalPackages(['@angular', '@rxjs', '@perfective']))
            .toStrictEqual([['^@angular'], ['^@rxjs'], ['^@perfective']]);
    });
});
