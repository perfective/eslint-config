// eslint-disable-next-line import/no-extraneous-dependencies -- ESLint parser used only during development
import * as tsEslint from 'typescript-eslint';

// eslint-disable-next-line unicorn/prevent-abbreviations -- matches plugin name
import { arrayFuncConfig } from './rules/array-func';
import { eslintConfig } from './rules/eslint';
import { eslintCommentsConfig } from './rules/eslint-comments';
import { importConfig } from './rules/import';
import { jsImportNoExtraneousDependencies } from './rules/import/rules/no-extraneous-dependencies';
import { jsdocConfig } from './rules/jsdoc';
import { nConfig } from './rules/n';
import { preferArrowConfig } from './rules/prefer-arrow';
import { promiseConfig } from './rules/promise';
import { securityConfig } from './rules/security';
import { simpleImportSortConfig } from './rules/simple-import-sort';
import { stylisticJsConfig } from './rules/stylistic/js';
import { stylisticJsxConfig } from './rules/stylistic/jsx';
import { stylisticPlusConfig } from './rules/stylistic/plus';
import { stylisticTsConfig } from './rules/stylistic/ts';
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
            sourceType: 'module',
            ecmaVersion: 'latest',
            parser: tsEslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                projectService: {
                    // Allow parsing JS config files that are not listed in the tsconfig
                    allowDefaultProject: ['?(.)*.?(m|c)js'],
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        plugins: {
            ...arrayFuncConfig.plugins,
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
            ...arrayFuncConfig.rules,
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
            sourceType: 'module',
            ecmaVersion: 'latest',
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
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
            sourceType: 'module',
            ecmaVersion: 'latest',
            parser: tsEslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                projectService: true,
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        plugins: {
            ...typescriptEslintConfig.plugins,
            ...stylisticTsConfig.plugins,
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
].filter(Boolean);
