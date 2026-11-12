import { describe, expect, it } from '@jest/globals';

import { javascriptLanguageOptions, languageOptions, typescriptLanguageOptions } from './language-options';

describe(languageOptions, () => {
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
    it('does not set a parser', () => {
        expect(javascriptLanguageOptions()).not.toHaveProperty('parser');
    });
});

describe(typescriptLanguageOptions, () => {
    it('uses the TypeScript parser with the project service', () => {
        expect(typescriptLanguageOptions()).toMatchObject({
            parser: expect.any(Object),
            parserOptions: {
                projectService: true,
            },
        });
    });
});
