import { Linter } from 'eslint';
import { jsdoc } from 'eslint-plugin-jsdoc';

import { ecmaFiles, Glob, javascriptFiles } from '../../linter/glob';
import { javascriptLanguageOptions } from '../../linter/language-options';

export function jsdocConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return jsdoc({
        config: 'flat/recommended',
        files,
        settings: {
            tagNamePreference: {
                augments: {
                    message: 'Use @extends instead of @augments as it is more evocative of classes than @augments',
                    replacement: 'extends',
                },
                todo: {
                    message: 'Use TODO for comments',
                },
                fires: 'emits',
            },
            ignoreReplacesDocs: true,
            overrideReplacesDocs: true,
            augmentsExtendsReplacesDocs: false,
            implementsReplacesDoc: false,
        },
        rules: {
            // @access should be optional and used only to mark package/private functions
            'jsdoc/check-access': 'off',
            'jsdoc/check-alignment': ['error', {
                ignoreEmptyLines: false,
                innerIndent: 1,
            }],
            // Deprecated. Use the getJsdocProcessorPlugin processor.
            // eslint-disable-next-line @typescript-eslint/no-deprecated -- Kept off until the plugin removes the rule.
            'jsdoc/check-examples': 'off',
            'jsdoc/check-indentation': 'off',
            // NOTE: "never" is not implemented yet by the plugin
            'jsdoc/check-line-alignment': ['off', 'never'],
            'jsdoc/check-param-names': ['error', {
                allowExtraTrailingParamDocs: false,
                // The fixer would rename a @param without updating its description.
                badParamNames: false,
                badParamOrder: true,
                checkDestructured: true,
                checkRestProperty: false,
                disableExtraPropertyReporting: false,
                disableMissingParamChecks: false,
                duplicateParams: true,
                enableFixer: true,
                // The fixer would remove the documentation of a parameter that may have been renamed.
                extraParams: false,
                // TBD
                useDefaultObjectProperties: false,
            }],
            'jsdoc/check-property-names': ['error', {
                enableFixer: true,
            }],
            'jsdoc/check-syntax': ['warn', {
                enableFixer: true,
            }],
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
            'jsdoc/escape-inline-tags': ['error', {
                allowedInlineTags: [],
                enableFixer: false,
                fixType: 'backticks',
            }],
            'jsdoc/implements-on-classes': 'error',
            'jsdoc/imports-as-dependencies': 'error',
            'jsdoc/informative-docs': 'off',
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
            // TypeScript reports undefined types.
            'jsdoc/no-undefined-types': 'off',
            'jsdoc/no-unnecessary-type-assertion': ['warn', {
                // Aligned with @typescript-eslint/no-unnecessary-type-assertion.
                checkLiteralConstAssertions: true,
                enableFixer: true,
                // Removing a broader assertion changes the declared, exported, or returned type.
                fixTypeChangingCasts: false,
                preferConstToLiteralTuples: true,
                treatAnyAsRedundant: true,
                typesToIgnore: [],
            }],
            'jsdoc/normalize-see-links': ['warn', {
                canonicalForm: 'pipe',
                enableFixer: true,
                wrapBareUrls: true,
            }],
            'jsdoc/prefer-import-tag': 'warn',
            'jsdoc/reject-any-type': 'error',
            'jsdoc/reject-function-type': 'error',
            'jsdoc/require-asterisk-prefix': ['error', 'always'],
            'jsdoc/require-description': ['error', {
                exemptedBy: ['inheritdoc', 'package', 'private', 'see', 'deprecated'],
            }],
            'jsdoc/require-description-complete-sentence': 'warn',
            'jsdoc/require-example': 'off',
            'jsdoc/require-file-overview': 'off',
            'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-next-description': 'error',
            'jsdoc/require-next-type': 'error',
            'jsdoc/require-param': 'off',
            'jsdoc/require-param-description': 'error',
            'jsdoc/require-param-name': 'error',
            // Conflicts with jsdoc/no-types: types are defined in the TypeScript code.
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-property': 'error',
            'jsdoc/require-property-description': 'error',
            'jsdoc/require-property-name': 'error',
            'jsdoc/require-property-type': 'error',
            'jsdoc/require-rejects': 'error',
            'jsdoc/require-returns': 'off',
            'jsdoc/require-returns-check': 'error',
            'jsdoc/require-returns-description': 'error',
            // Conflicts with jsdoc/no-types: types are defined in the TypeScript code.
            'jsdoc/require-returns-type': 'off',
            // TODO: Configure for the '@since' tag.
            'jsdoc/require-tags': 'off',
            // Types documentation is irrelevant in most places.
            'jsdoc/require-template': ['off', {
                exemptedBy: [],
                requireSeparateTemplates: false,
            }],
            'jsdoc/require-template-description': 'off',
            'jsdoc/require-throws': 'error',
            'jsdoc/require-throws-description': 'error',
            'jsdoc/require-throws-type': 'error',
            'jsdoc/require-yields': 'error',
            'jsdoc/require-yields-check': 'error',
            'jsdoc/require-yields-description': 'error',
            'jsdoc/require-yields-type': 'error',
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
                startLinesWithNoTags: 0,
                endLines: 0,
                applyToEndTag: false,
                maxBlockLines: null,
                tags: {},
            }],
            'jsdoc/text-escaping': 'off',
            // Use @typescript-eslint/ban-ts-comment.
            'jsdoc/ts-ban-ts-comment': 'off',
            'jsdoc/ts-method-signature-style': 'warn',
            'jsdoc/ts-no-empty-object-type': 'error',
            'jsdoc/ts-no-unnecessary-template-expression': 'warn',
            'jsdoc/ts-prefer-function-type': 'warn',
            // Options align the JSDoc types with the @stylistic and typescript-eslint rules for the code.
            'jsdoc/type-formatting': ['warn', {
                // As @typescript-eslint/array-type.
                arrayBrackets: 'square',
                // As @stylistic/arrow-spacing.
                arrowFunctionPostReturnMarkerSpacing: ' ',
                arrowFunctionPreReturnMarkerSpacing: ' ',
                enableFixer: true,
                // As @stylistic/comma-spacing.
                functionOrClassParameterSpacing: ' ',
                // As @stylistic/function-call-spacing.
                functionOrClassPostGenericSpacing: '',
                // As @stylistic/type-annotation-spacing.
                functionOrClassPostReturnMarkerSpacing: ' ',
                functionOrClassPreReturnMarkerSpacing: '',
                // As @stylistic/comma-spacing.
                functionOrClassTypeParameterSpacing: ' ',
                genericAndTupleElementSpacing: ' ',
                genericDot: false,
                // As @stylistic/key-spacing and @stylistic/type-annotation-spacing.
                keyValuePostColonSpacing: ' ',
                keyValuePostKeySpacing: '',
                keyValuePostOptionalSpacing: '',
                // As @stylistic/rest-spread-spacing.
                keyValuePostVariadicSpacing: '',
                // As @stylistic/quotes.
                methodQuotes: 'single',
                // As @stylistic/indent.
                objectFieldIndent: ' '.repeat(4),
                // As @stylistic/quote-props.
                objectFieldQuote: null,
                // @stylistic/member-delimiter-style requires semicolons,
                // but in eslint-plugin-jsdoc v65.4.11 the "semicolon" separators with trailing punctuation
                // drop the objectTypeBracketSpacing (and the "comma" separator joins multiline types into one line).
                // See https://github.com/perfective/eslint-config/issues/80.
                objectFieldSeparator: 'comma-and-linebreak',
                // As @stylistic/object-property-newline with allowAllPropertiesOnSameLine.
                objectFieldSeparatorOptionalLinebreak: true,
                // As @stylistic/comma-dangle.
                objectFieldSeparatorTrailingPunctuation: true,
                // As @stylistic/object-curly-spacing.
                objectTypeBracketSpacing: ' ',
                // As @stylistic/space-infix-ops.
                parameterDefaultValueSpacing: ' ',
                // As @stylistic/space-before-function-paren.
                postMethodNameSpacing: '',
                // As @stylistic/keyword-spacing.
                postNewSpacing: ' ',
                // As @stylistic/comma-dangle.
                separatorForSingleObjectField: false,
                // As @stylistic/quotes.
                stringQuotes: 'single',
                // As @stylistic/comma-dangle.
                trailingPunctuationMultilineOnly: true,
                typeBracketSpacing: '',
                // As @stylistic/space-infix-ops.
                unionSpacing: ' ',
            }],
            'jsdoc/valid-types': 'error',
        },
    });
}

export function jsdocJavascriptConfig(): Linter.Config {
    return {
        files: javascriptFiles,
        languageOptions: javascriptLanguageOptions(),
        rules: {
            'jsdoc/no-types': 'off',
            'jsdoc/no-undefined-types': 'error',
            'jsdoc/require-param': 'error',
            'jsdoc/require-param-type': 'error',
            'jsdoc/require-returns': 'error',
            'jsdoc/require-returns-type': 'error',
        },
    };
}
