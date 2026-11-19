import globals from 'globals';

import { describe, expect, it } from '@jest/globals';

import { javascriptLanguageOptions, languageOptions, typescriptLanguageOptions } from './language-options';

const expectedGlobals = {
    ...globals.browser,
    ...globals.nodeBuiltin,
};

describe(languageOptions, () => {
    it('defines browser and Node.js ES module globals', () => {
        expect(languageOptions().globals).toStrictEqual(expectedGlobals);
        expect(languageOptions().globals).not.toHaveProperty('require');
    });

    it('uses the TypeScript parser and allows default project for JS config files', () => {
        expect(languageOptions()).toMatchObject({
            sourceType: 'module',
            parser: expect.any(Object),
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['?(.)*.?(m|c)js'],
                },
            },
        });
    });
});

describe(javascriptLanguageOptions, () => {
    it('defines browser and Node.js ES module globals', () => {
        expect(javascriptLanguageOptions().globals).toStrictEqual(expectedGlobals);
        expect(javascriptLanguageOptions().globals).not.toHaveProperty('require');
    });

    it('does not set a parser', () => {
        expect(javascriptLanguageOptions()).not.toHaveProperty('parser');
    });
});

describe(typescriptLanguageOptions, () => {
    it('defines browser and Node.js ES module globals', () => {
        expect(typescriptLanguageOptions().globals).toStrictEqual(expectedGlobals);
        expect(typescriptLanguageOptions().globals).not.toHaveProperty('require');
    });

    it('uses the TypeScript parser with the project service', () => {
        expect(typescriptLanguageOptions()).toMatchObject({
            parser: expect.any(Object),
            parserOptions: {
                projectService: true,
            },
        });
    });
});
