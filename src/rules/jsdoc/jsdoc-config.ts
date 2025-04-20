import { Linter } from 'eslint';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';

import { javascriptFiles } from '../../linter/glob';
import { javascriptLanguageOptions } from '../../linter/language-options';

export function jsdocConfig(): Linter.Config {
    return {
        plugins: {
            jsdoc: {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe assertion
                rules: eslintPluginJsdoc.configs['flat/recommended'].plugins!['jsdoc'].rules,
            },
        },
        settings: {
            jsdoc: {
                tagNamePreference: {
                    augments: {
                        message: 'Use @extends instead of @augments as it is more evocative of classes than @augments',
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
                disableMissingParamChecks: false,
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
            'jsdoc/check-template-names': 'error',
            'jsdoc/check-types': ['error', {
                noDefaults: false,
            }],
            'jsdoc/check-values': 'error',
            // Unclear if there is any value in forcing using JSDocs.
            'jsdoc/convert-to-jsdoc-comments': 'off',
            'jsdoc/empty-tags': ['error', {
                tags: ['final', 'flags', 'sealed'],
            }],
            'jsdoc/implements-on-classes': 'error',
            'jsdoc/imports-as-dependencies': 'error',
            'jsdoc/lines-before-block': 'off',
            'jsdoc/match-description': 'error',
            'jsdoc/match-name': 'off',
            'jsdoc/multiline-blocks': ['warn', {
                noZeroLineText: true,
                noFinalLineText: true,
                noSingleLineBlocks: true,
                singleLineTags: ['lends', 'type', 'deprecated'],
                noMultilineBlocks: false,
                multilineTags: ['*'],
                allowMultipleTags: true,
            }],
            'jsdoc/no-bad-blocks': ['error', {
                ignore: ['ts-check', 'ts-expect-error', 'ts-ignore', 'ts-nocheck', 'typescript-eslint'],
                preventAllMultiAsteriskBlocks: false,
            }],
            'jsdoc/no-blank-blocks': 'warn',
            'jsdoc/no-blank-block-descriptions': 'off',
            'jsdoc/no-defaults': 'error',
            'jsdoc/no-missing-syntax': 'off',
            'jsdoc/no-multi-asterisks': ['error', {
                allowWhitespace: false,
                preventAtMiddleLines: true,
                preventAtEnd: true,
            }],
            'jsdoc/no-restricted-syntax': 'off',
            'jsdoc/no-types': 'error',
            'jsdoc/no-undefined-types': 'error',
            'jsdoc/require-asterisk-prefix': ['error', 'always'],
            'jsdoc/require-description': ['error', {
                exemptedBy: ['inheritdoc', 'package', 'private', 'see', 'deprecated'],
            }],
            'jsdoc/require-description-complete-sentence': 'warn',
            'jsdoc/require-example': 'off',
            'jsdoc/require-file-overview': 'off',
            'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
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
            // Types documentation is irrelevant in most places.
            'jsdoc/require-template': ['off', {
                requireSeparateTemplates: false,
            }],
            'jsdoc/require-throws': 'error',
            'jsdoc/require-yields': 'error',
            'jsdoc/require-yields-check': 'error',
            'jsdoc/sort-tags': ['warn', {
                tagSequence: [
                    {
                        // Brief descriptions
                        tags: [
                            'summary',
                            'typeSummary',
                        ],
                    },
                    {
                        // Module/file-level
                        tags: [
                            'module',
                            'exports',
                            'file',
                            'fileoverview',
                            'overview',
                        ],
                    },
                    {
                        // Identifying (name, type)
                        tags: [
                            'typedef',
                            'interface',
                            'record',
                            'template',
                            'name',
                            'kind',
                            'type',
                            'alias',
                            'external',
                            'host',
                            'callback',
                            'func',
                            'function',
                            'method',
                            'class',
                            'constructor',
                        ],
                    },
                    {
                        // Relationships
                        tags: [
                            'modifies',
                            'mixes',
                            'mixin',
                            'mixinClass',
                            'mixinFunction',
                            'namespace',
                            'borrows',
                            'constructs',
                            'lends',
                            'implements',
                            'requires',
                        ],
                    },
                    {
                        // Long descriptions
                        tags: [
                            'desc',
                            'description',
                            'classdesc',
                            'tutorial',
                            'copyright',
                            'license',
                        ],
                    },
                    {
                        // Simple annotations
                        tags: [
                            'const',
                            'constant',
                            'final',
                            'global',
                            'readonly',
                            'abstract',
                            'virtual',
                            'var',
                            'member',
                            'memberof',
                            'memberof!',
                            'inner',
                            'instance',
                            'inheritdoc',
                            'inheritDoc',
                            'override',
                            'hideconstructor',
                        ],
                    },
                    {
                        // Core function/object info
                        tags: [
                            'param',
                            'arg',
                            'argument',
                            'prop',
                            'property',
                        ],
                    },
                    {
                        // Important behavior details
                        tags: [
                            'async',
                            'generator',
                            'default',
                            'defaultvalue',
                            'enum',
                            'augments',
                            'extends',
                            'return',
                            'returns',
                            'throws',
                            'exception',
                            'yield',
                            'yields',
                            'event',
                            'fires',
                            'emits',
                            'listens',
                            'this',
                        ],
                    },
                    {
                        // Access
                        tags: [
                            'static',
                            'private',
                            'protected',
                            'public',
                            'access',
                            'package',
                        ],
                    },
                    {
                        // Supplementary descriptions
                        tags: [
                            'see',
                            'example',
                        ],
                    },
                    {
                        // Other Closure (undocumented) metadata
                        tags: [
                            'closurePrimitive',
                            'customElement',
                            'expose',
                            'hidden',
                            'idGenerator',
                            'meaning',
                            'ngInject',
                            'owner',
                            'wizaction',
                        ],
                    },
                    {
                        // Other Closure (documented) metadata
                        tags: [
                            'define',
                            'dict',
                            'export',
                            'externs',
                            'implicitCast',
                            'noalias',
                            'nocollapse',
                            'nocompile',
                            'noinline',
                            'nosideeffects',
                            'polymer',
                            'polymerBehavior',
                            'preserve',
                            'struct',
                            'suppress',
                            'unrestricted',
                        ],
                    },
                    {
                        // @homer0/prettier-plugin-jsdoc metadata
                        tags: [
                            'category',
                        ],
                    },
                    {
                        // Non-Closure metadata
                        tags: [
                            'ignore',
                            'author',
                            'version',
                            'variation',
                            'since',
                            'deprecated',
                            'todo',
                        ],
                    },
                ],
                alphabetizeExtras: false,
                linesBetween: 1,
                reportTagGroupSpacing: true,
                reportIntraTagGroupSpacing: true,
            }],
            'jsdoc/tag-lines': ['warn', 'always', {
                count: 0,
                startLines: 1,
                endLines: 0,
                applyToEndTag: false,
                tags: {},
            }],
            'jsdoc/valid-types': 'error',
        },
    };
}

export function jsdocJavascriptConfig(): Linter.Config {
    return {
        files: javascriptFiles,
        languageOptions: javascriptLanguageOptions(),
        rules: {
            'jsdoc/no-types': 'off',
            'jsdoc/no-undefined-types': 'off',
            'jsdoc/require-param': 'error',
            'jsdoc/require-param-type': 'error',
            'jsdoc/require-returns': 'error',
            'jsdoc/require-returns-type': 'error',
        },
    };
}
