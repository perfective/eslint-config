export = {
    plugins: [
        'jsdoc',
    ],
    settings: {
        jsdoc: {
            tagNamePreference: {
                augments: {
                    message: '@extends is to be used over @augments as it is more evocative of classes than @augments',
                    replacement: 'extends',
                },
                todo: {
                    message: 'Use TODO for comments',
                },
                fires: {
                    replacement: 'emits',
                },
            },
            ignoreReplacesDocs: true,
            overrideReplacesDocs: true,
            augmentsExtendsReplacesDocs: false,
            implementsReplacesDoc: false,
        },
    },
    rules: {
        // @access should be optional and used only to mark package/private functions
        'jsdoc/check-access': 'off',
        'jsdoc/check-alignment': 'error',
        // TODO: Determine if it can be configured to work with TypeScript
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': 'off',
        // NOTE: "never" is not implemented yet by the plugin
        'jsdoc/check-line-alignment': ['off', 'never'],
        'jsdoc/check-param-names': ['error', {
            allowExtraTrailingParamDocs: false,
            checkDestructured: true,
            checkRestProperty: false,
            disableExtraPropertyReporting: false,
            enableFixer: true,
            // TBD
            useDefaultObjectProperties: false,
        }],
        'jsdoc/check-property-names': ['error', {
            enableFixer: true,
        }],
        'jsdoc/check-syntax': 'error',
        // TODO: Check if tags like @abstract, @async, etc. that have keywords in TypeScript are removed.
        'jsdoc/check-tag-names': ['error', {
            definedTags: ['final', 'flags', 'sealed', 'workaround'],
            jsxTags: true,
        }],
        'jsdoc/check-types': ['error', {
            noDefaults: false,
        }],
        'jsdoc/check-values': 'error',
        'jsdoc/empty-tags': ['error', {
            tags: ['final', 'flags', 'sealed'],
        }],
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/match-description': 'error',
        'jsdoc/match-name': 'off',
        'jsdoc/multiline-blocks': ['error', {
            noZeroLineText: true,
            noFinalLineText: true,
            noSingleLineBlocks: true,
            singleLineTags: ['lends', 'type', 'deprecated'],
            noMultilineBlocks: false,
            multilineTags: ['*'],
            allowMultipleTags: true,
        }],
        'jsdoc/newline-after-description': ['error', 'always'],
        'jsdoc/no-bad-blocks': ['error', {
            ignore: ['ts-check', 'ts-expect-error', 'ts-ignore', 'ts-nocheck', 'typescript-eslint'],
            preventAllMultiAsteriskBlocks: false,
        }],
        'jsdoc/no-defaults': 'error',
        'jsdoc/no-missing-syntax': 'off',
        'jsdoc/no-multi-asterisks': ['error', {
            preventAtMiddleLines: true,
            preventAtEnd: true,
        }],
        'jsdoc/no-restricted-syntax': 'off',
        'jsdoc/no-types': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/require-asterisk-prefix': ['error', 'always'],
        'jsdoc/require-description': ['error', {
            exemptedBy: ['inheritdoc', 'package', 'private', 'see'],
        }],
        'jsdoc/require-description-complete-sentence': 'error',
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': ['error', 'always'],
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-name': 'error',
        // Conflicts with jsdoc/no-types: types are defined in the TypeScript code.
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-property-type': 'error',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        // Conflicts with jsdoc/no-types: types are defined in the TypeScript code.
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-throws': 'error',
        'jsdoc/require-yields': 'error',
        'jsdoc/require-yields-check': 'error',
        'jsdoc/tag-lines': ['off', 'never', {
            count: 1,
            noEndLines: true,
            tags: {},
        }],
        'jsdoc/valid-types': 'error',
    },
};
