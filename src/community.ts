import { unicornPreventAbbreviations } from './rules/unicorn/rules/prevent-abbreviations';

export = {
    extends: './',
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: jsCommunityOverrides(),
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                ...jsCommunityOverrides(),
                // Conflicts with "no-confusing-arrow" { allowParens: true }
                '@typescript-eslint/no-extra-parens': 'off',
                '@typescript-eslint/triple-slash-reference': ['error', {
                    path: 'never',
                    types: 'always',
                    lib: 'never',
                }],
                // Using the established defaults in typescript-eslint v3.x
                '@typescript-eslint/typedef': ['error', {
                    arrayDestructuring: false,
                    arrowParameter: false,
                    memberVariableDeclaration: true,
                    objectDestructuring: false,
                    parameter: true,
                    propertyDeclaration: true,
                    variableDeclaration: false,
                    variableDeclarationIgnoreFunction: false,
                }],
                // Undesired behavior in functions like forkJoin
                'rxjs/finnish': 'off',
            },
        },
        {
            files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
            rules: {
                // Allow uppercase in describe() as it can be used for the class name in PascalCase
                'jest/lowercase-name': ['error', {
                    ignore: ['describe'],
                }],
            },
        },
    ],
};

function jsCommunityOverrides(): Record<string, unknown> {
    return {
        'max-params': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        // Traditionally is used to avoid conflicts between property and method name
        'no-underscore-dangle': ['error', {
            allowFunctionParams: true,
        }],
        'object-curly-newline': ['error', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: { multiline: true },
        }],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations({}, {
            // Do not check for properties on external types
            checkProperties: false,
        })],
        // Requires research on level of effort in writing safer regular expressions
        'unicorn/no-unsafe-regex': 'off',
    };
}
