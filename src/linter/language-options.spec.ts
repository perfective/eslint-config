import globals from 'globals';

import { describe, expect, it } from '@jest/globals';

import { javascriptLanguageOptions, languageOptions, typescriptLanguageOptions } from './language-options';

function readonlyGlobals(environment: Record<string, boolean | 'readonly' | 'writable'>): Record<string, 'readonly'> {
    return Object.fromEntries(Object.keys(environment).map(name => [name, 'readonly']));
}

describe(languageOptions, () => {
    it('defines browser globals', () => {
        expect(languageOptions().globals).toMatchObject(readonlyGlobals(globals.browser));
    });

    it('defines Node.js ES modules globals', () => {
        expect(languageOptions().globals).toMatchObject(readonlyGlobals(globals.nodeBuiltin));
        expect(languageOptions().globals).not.toHaveProperty('require');
    });

    it('defines all globals as readonly', () => {
        expect(languageOptions().globals).toHaveProperty('location', 'readonly');
        expect(languageOptions().globals).toHaveProperty('onclick', 'readonly');
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
    it('defines browser globals', () => {
        expect(javascriptLanguageOptions().globals).toMatchObject(readonlyGlobals(globals.browser));
    });

    it('defines Node.js ES modules globals', () => {
        expect(javascriptLanguageOptions().globals).toMatchObject(readonlyGlobals(globals.nodeBuiltin));
        expect(javascriptLanguageOptions().globals).not.toHaveProperty('require');
    });

    it('does not set a parser', () => {
        expect(javascriptLanguageOptions()).not.toHaveProperty('parser');
    });
});

describe(typescriptLanguageOptions, () => {
    it('defines browser globals', () => {
        expect(typescriptLanguageOptions().globals).toMatchObject(readonlyGlobals(globals.browser));
    });

    it('defines Node.js ES modules globals', () => {
        expect(typescriptLanguageOptions().globals).toMatchObject(readonlyGlobals(globals.nodeBuiltin));
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
