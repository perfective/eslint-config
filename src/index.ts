// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import * as tsEslint from 'typescript-eslint';

// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import * as babelParser from '@babel/eslint-parser';

import { hasEslintPlugin } from './config/plugin';
import { arrayFuncConfig as arrayFunctionConfig } from './rules/array-func';
import { eslintConfig } from './rules/eslint';
import { eslintCommentsConfig } from './rules/eslint-comments';
import { importConfig } from './rules/import';
import {
    jestImportNoExtraneousDependencies,
    jsImportNoExtraneousDependencies,
} from './rules/import/rules/no-extraneous-dependencies';
import { jestConfig } from './rules/jest';
import { jestDomConfig } from './rules/jest-dom';
import { jsdocConfig } from './rules/jsdoc';
import { nConfig } from './rules/n';
import { preferArrowConfig } from './rules/prefer-arrow';
import { promiseConfig } from './rules/promise';
import { rxjsConfig } from './rules/rxjs';
import { securityConfig } from './rules/security';
import { simpleImportSortConfig } from './rules/simple-import-sort';
import { stylisticJsConfig } from './rules/stylistic/js';
import { stylisticJsxConfig } from './rules/stylistic/jsx';
import { stylisticPlusConfig } from './rules/stylistic/plus';
import { stylisticTsConfig } from './rules/stylistic/ts';
import { testingLibraryConfig } from './rules/testing-library';
import { typescriptEslintConfig } from './rules/typescript-eslint';
import { unicornConfig } from './rules/unicorn';

// eslint-disable-next-line import/no-default-export -- ESLint recommended practice.
export default [
    {
        ignores: ['**/*.d.ts', '**/dist'],
    },
    {
        files: ['**/*.[jt]s?(x)'],
        languageOptions: {
            parser: tsEslint.parser,
            parserOptions: {
                // Parser options have to be duplicated when the parser is overridden
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                // TypeScript ESLint Parser
                project: './tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        plugins: {
            ...arrayFunctionConfig.plugins,
            ...eslintCommentsConfig.plugins,
            ...importConfig.plugins,
            ...jsdocConfig.plugins,
            ...nConfig.plugins,
            ...preferArrowConfig.plugins,
            ...promiseConfig.plugins,
            ...securityConfig.plugins,
            ...simpleImportSortConfig.plugins,
            ...stylisticJsConfig.plugins,
            ...stylisticPlusConfig.plugins,
            ...unicornConfig.plugins,
        },
        settings: {
            jsdoc: jsdocConfig.settings,
        },
        rules: {
            ...arrayFunctionConfig.rules,
            ...eslintConfig.rules,
            ...eslintCommentsConfig.rules,
            ...importConfig.rules,
            ...jsdocConfig.rules,
            ...nConfig.rules,
            ...preferArrowConfig.rules,
            ...promiseConfig.rules,
            ...securityConfig.rules,
            ...simpleImportSortConfig.rules,
            ...stylisticJsConfig.rules,
            ...stylisticPlusConfig.rules,
            ...unicornConfig.rules,
        },
    },
    {
        files: ['**/*.js?(x)'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                requireConfigFile: false,
            },
        },
        plugins: {},
        settings: {
            'import/extensions': ['.js', '.jsx'],
        },
        rules: {
            'import/no-commonjs': 'off',
            'import/no-extraneous-dependencies': ['error', jsImportNoExtraneousDependencies()],
            'import/unambiguous': 'off',
            'jsdoc/no-types': 'off',
            'jsdoc/no-undefined-types': 'off',
            'jsdoc/require-param': 'error',
            'jsdoc/require-param-type': 'error',
            'jsdoc/require-returns': 'error',
            'jsdoc/require-returns-type': 'error',
        },
    },
    {
        files: ['**/*.ts?(x)'],
        languageOptions: {
            parser: tsEslint.parser,
            parserOptions: {
                // Parser options have to be duplicated when the parser is overridden
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
                // TypeScript ESLint Parser
                project: './tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        plugins: {
            ...typescriptEslintConfig.plugins,
            ...stylisticTsConfig.plugins,
            ...hasEslintPlugin('@smarttools/rxjs') ? rxjsConfig.plugins : {},
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': [
                    '.ts',
                    '.tsx',
                ],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
        rules: {
            ...typescriptEslintConfig.rules,
            ...stylisticTsConfig.rules,
            ...hasEslintPlugin('@smarttools/rxjs') ? rxjsConfig.rules : {},
        },
    },
    {
        files: ['**/*.js?(x)'],
        plugins: {
            ...stylisticJsxConfig.plugins,
        },
        rules: {
            ...stylisticJsxConfig.rules,
        },
    },
    // eslint-disable-next-line @stylistic/js/multiline-ternary -- temporary
    hasEslintPlugin('jest') ? {
        // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
        files: ['**/*.@(spec|test).[jt]s?(x)'],
        plugins: {
            ...jestConfig.plugins,
            ...hasEslintPlugin('jest-dom') ? jestDomConfig.plugins : {},
            ...hasEslintPlugin('testing-library') ? testingLibraryConfig.plugins : {},
        },
        rules: {
            ...jestConfig.rules,
            ...hasEslintPlugin('jest-dom') ? jestDomConfig.rules : {},
            ...hasEslintPlugin('testing-library') ? testingLibraryConfig.rules : {},
            '@typescript-eslint/ban-ts-comment': ['error', {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': false,
            }],
            '@typescript-eslint/init-declarations': 'off',
            // See "jest/unbound-method"
            '@typescript-eslint/unbound-method': 'off',
            'import/no-extraneous-dependencies': ['error', jestImportNoExtraneousDependencies()],
            'import/no-unassigned-import': ['error', {
                allow: [
                    '@testing-library/jest-dom',
                    '@testing-library/jest-dom/extend-expect',
                ],
            }],
            // There can be 4 levels of `describe()`: Class -> Method -> Method Signature -> "When...",
            // followed by a level for `it()`.
            // The 6th level (inside of `it()`) can be required for a callback to test `toThrow()`.
            'max-nested-callbacks': ['error', 6],
            'n/no-unpublished-import': ['error', {
                // Required in devDependencies.
                allowModules: ['@jest/globals'],
            }],
            // Conflicts with func-style inside describe()
            'prefer-arrow/prefer-arrow-functions': 'off',
            // In tests the last step of a Promise is to run "expect".
            // TODO: This rule can be improved by allowing configuring functions when Promise<void> is expected.
            'promise/always-return': 'off',
            // Passing promise is required for async testing
            '@smarttools/rxjs/no-topromise': 'off',
        },
    } : null,
].filter(Boolean);
