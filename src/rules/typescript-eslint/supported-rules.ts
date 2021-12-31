import { typescriptEslintNamingConvention } from './rules/typescript-eslint-naming-convention';

export = {
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['warn', {
            default: 'array',
            readonly: 'array',
        }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'warn',
        '@typescript-eslint/ban-types': ['error', {
            types: {
                object: {
                    message: [
                        'The `object` type is currently hard to use',
                        '([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
                        'Consider using `Record<string, unknown>` instead,',
                        'as it allows you to more easily inspect and use the keys.',
                    ].join('\n'),
                },
            },
            extendDefaults: true,
        }],
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
        }],
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/consistent-type-exports': ['off', {
            fixMixedExportsWithInlineTypeSpecifier: true,
        }],
        '@typescript-eslint/consistent-type-imports': ['warn', {
            prefer: 'no-type-imports',
            disallowTypeAnnotations: true,
        }],
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        }],
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-delimiter-style': ['warn', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: true,
            },
            multilineDetection: 'brackets',
        }],
        '@typescript-eslint/member-ordering': ['error', {
            default: [
                'signature',
                'public-static-field',
                'public-abstract-field',
                'public-decorated-field',
                'public-instance-field',
                'protected-static-field',
                'protected-abstract-field',
                'protected-decorated-field',
                'protected-instance-field',
                'private-static-field',
                'private-abstract-field',
                'private-decorated-field',
                'private-instance-field',
                'field',
                'constructor',
                'public-static-method',
                'public-static-set',
                'public-static-get',
                'public-abstract-method',
                'public-abstract-set',
                'public-abstract-get',
                'public-decorated-method',
                'public-decorated-set',
                'public-decorated-get',
                'public-instance-method',
                'public-instance-set',
                'public-instance-get',
                'protected-static-method',
                'protected-static-set',
                'protected-static-get',
                'protected-abstract-method',
                'protected-abstract-set',
                'protected-abstract-get',
                'protected-decorated-method',
                'protected-decorated-set',
                'protected-decorated-get',
                'protected-instance-method',
                'protected-instance-set',
                'protected-instance-get',
                'private-static-method',
                'private-static-set',
                'private-static-get',
                'private-abstract-method',
                'private-abstract-set',
                'private-abstract-get',
                'private-decorated-method',
                'private-decorated-set',
                'private-decorated-get',
                'private-instance-method',
                'private-instance-set',
                'private-instance-get',
                'method',
            ],
        }],
        '@typescript-eslint/method-signature-style': ['warn', 'property'],
        // See no-underscore-dangle
        '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
        '@typescript-eslint/no-confusing-void-expression': ['warn', {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: false,
        }],
        '@typescript-eslint/no-dynamic-delete': 'warn',
        // An empty interface can be used as nominal type or a self-documenting placeholder.
        // "@typescript-eslint/consistent-type-definitions" does not allow to do "type A = {}" as a placeholder.
        '@typescript-eslint/no-empty-interface': ['off', {
            allowSingleExtends: true,
        }],
        '@typescript-eslint/no-explicit-any': ['error', {
            fixToUnknown: false,
            ignoreRestArgs: false,
        }],
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-extraneous-class': ['error', {
            allowConstructorOnly: false,
            allowEmpty: false,
            allowStaticOnly: false,
            allowWithDecorator: true,
        }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': ['error', {
            allowExplicitAny: false,
        }],
        '@typescript-eslint/no-inferrable-types': 'off',
        // Allow for generic types like "Nullary<void>" (as "(value: T) => void" declaration is already valid)
        '@typescript-eslint/no-invalid-void-type': ['error', {
            allowInGenericTypeArguments: true,
        }],
        '@typescript-eslint/no-meaningless-void-operator': ['warn', {
            checkNever: true,
        }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn', {
            allowComparingNullableBooleansToTrue: true,
            allowComparingNullableBooleansToFalse: true,
        }],
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        // This rule is fixable, but
        //  an autofix will create a conflict with the @typescript-eslint/no-non-null-assertion rule
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': ['error', {
            allowBitwiseExpressions: true,
        }],
        '@typescript-eslint/prefer-namespace-keyword': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        // Rule behavior is unpredictable and 3rd-party libraries may not provide read-only types
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        // With the "func-style" as "declaration",
        // arrow functions can only be lambdas,
        // so `async` keyword can be skipped for brevity.
        // NOTE: if "func-style" as "expression",
        //  not checking arrow functions causes "require-await" to miss async functions.
        '@typescript-eslint/promise-function-async': ['warn', {
            checkArrowFunctions: false,
        }],
        '@typescript-eslint/require-array-sort-compare': ['error', {
            ignoreStringArrays: true,
        }],
        '@typescript-eslint/restrict-plus-operands': ['error', {
            checkCompoundAssignments: true,
            allowAny: false,
        }],
        '@typescript-eslint/restrict-template-expressions': ['error', {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowNumber: false,
            allowRegExp: false,
        }],
        // The idea for this rule is good, but it does not have enough granularity.
        // For example, "null", "string" and "undefined" are keywords,
        // so the sorted result will always be "null | string | undefined",
        // while for readability, it makes more sense to have "string | null | undefined".
        // (As well as mixed with "true" or "false" that are in the "literal" group).
        // Another problem is that in case of polymorphism and different signatures,
        // the order of the union types may be important for readability/maintainability as well.
        '@typescript-eslint/sort-type-union-intersection-members': ['off', {
            checkIntersections: true,
            checkUnions: true,
            groupOrder: [
                'named',
                'keyword',
                'operator',
                'literal',
                'function',
                'import',
                'conditional',
                'object',
                'tuple',
                'intersection',
                'union',
                'nullish',
            ],
        }],
        '@typescript-eslint/strict-boolean-expressions': ['error', {
            allowString: false,
            allowNumber: false,
            allowNullableObject: true,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false,
        }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': ['error', {
            path: 'never',
            types: 'always',
            lib: 'never',
        }],
        '@typescript-eslint/type-annotation-spacing': 'warn',
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
        '@typescript-eslint/unbound-method': ['error', {
            // See TSLint "static-this"
            ignoreStatic: true,
        }],
        '@typescript-eslint/unified-signatures': 'error',
    },
};
