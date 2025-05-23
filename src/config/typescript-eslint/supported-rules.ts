import { Linter } from 'eslint';

import { typescriptEslintNamingConvention } from './rules/typescript-eslint-naming-convention';

export const supportedRules: Linter.RulesRecord = {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['warn', {
        default: 'array',
        readonly: 'array',
    }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    // Deprecated. Use @typescript-eslint/no-restricted-types, @typescript-eslint/no-unsafe-function-type, and
    // @typescript-eslint/no-wrapper-object-types.
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-generic-constructors': ['warn', 'type-annotation'],
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['error', {
        assertionStyle: 'as',
        arrayLiteralTypeAssertions: 'allow-as-parameter',
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
        allowDirectConstAssertionInArrowFunctions: true,
        allowExpressions: false,
        allowFunctionsWithoutTypeParameters: false,
        allowHigherOrderFunctions: true,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- external option name
        allowIIFEs: false,
        allowTypedFunctionExpressions: true,
        allowedNames: [],
    }],
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // Deprecated. Use https://eslint.style/rules/ts/member-delimiter-style.
    '@typescript-eslint/member-delimiter-style': 'off',
    // Do not group readonly fields,
    // because readonly is an implementation detail and when it changes
    // it should not affect the layout of the code.
    '@typescript-eslint/member-ordering': ['error', {
        default: [
            'signature',
            'call-signature',
            'public-static-field',
            'public-abstract-field',
            'public-decorated-field',
            'public-instance-field',
            'protected-static-field',
            'protected-abstract-field',
            'protected-decorated-field',
            'protected-instance-field',
            'private-static-field',
            '#private-static-field',
            'private-decorated-field',
            'private-instance-field',
            '#private-instance-field',
            'field',
            'static-initialization',
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
            '#private-static-method',
            'private-static-set',
            'private-static-get',
            '#private-static-set',
            '#private-static-get',
            'private-decorated-method',
            'private-decorated-set',
            'private-decorated-get',
            'private-instance-method',
            '#private-instance-method',
            'private-instance-set',
            'private-instance-get',
            '#private-instance-set',
            '#private-instance-get',
            'method',
        ],
    }],
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    // See no-underscore-dangle
    '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': ['warn', {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
    }],
    '@typescript-eslint/no-deprecated': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': ['error', {
        ignoreIntersections: false,
        ignoreUnions: false,
    }],
    '@typescript-eslint/no-dynamic-delete': 'warn',
    // An empty interface can be used as nominal type or a self-documenting placeholder.
    // "@typescript-eslint/consistent-type-definitions" does not allow to do "type A = {}" as a placeholder.
    '@typescript-eslint/no-empty-interface': ['off', {
        allowSingleExtends: true,
    }],
    '@typescript-eslint/no-empty-object-type': ['error', {
        // An empty interface can be used as nominal type or a self-documenting placeholder.
        // See @typescript-eslint/no-empty-interface
        allowInterfaces: 'always',
        allowObjectTypes: 'never',
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
    '@typescript-eslint/no-floating-promises': ['error', {
        allowForKnownSafeCalls: [],
        allowForKnownSafePromises: [],
        checkThenables: true,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- external property name
        ignoreIIFE: false,
        ignoreVoid: true,
    }],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    // Allow for generic types like "Nullary<void>" (as "(value: T) => void" declaration is already valid)
    '@typescript-eslint/no-invalid-void-type': ['error', {
        allowInGenericTypeArguments: true,
    }],
    '@typescript-eslint/no-meaningless-void-operator': ['warn', {
        checkNever: true,
    }],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': ['error', {
        checksConditionals: true,
        checksVoidReturn: true,
    }],
    '@typescript-eslint/no-misused-spread': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',
    '@typescript-eslint/no-require-imports': ['error', {
        allow: [],
    }],
    '@typescript-eslint/no-restricted-types': ['error', {
        types: {
            object: {
                message: [
                    'The `object` type is currently hard to use',
                    '(https://github.com/microsoft/TypeScript/issues/21732).',
                ].join(' '),
                suggest: ['Record<string, unknown>'],
            },
        },
    }],
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn', {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
    }],
    '@typescript-eslint/no-unnecessary-condition': ['error', {
        allowConstantLoopConditions: false,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- external property
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        checkTypePredicates: false,
    }],
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': ['warn', {
        checkLiteralConstAssertions: true,
        typesToIgnore: [],
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    // Type assertions are only needed when they are unsafe, because they hint the types that compiler cannot deduce.
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    // Deprecated. Use @typescript-eslint/no-useless-template-expressions instead.
    '@typescript-eslint/no-useless-template-literal': 'off',
    '@typescript-eslint/no-var-requires': ['error', {
        allow: [],
    }],
    '@typescript-eslint/no-wrapper-object-types': 'warn',
    // This rule is fixable, but
    //  an autofix will create a conflict with the @typescript-eslint/no-non-null-assertion rule
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': ['error', {
        prefer: 'parameter-property',
    }],
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': ['error', {
        allowBitwiseExpressions: true,
    }],
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignoreBooleanCoercion: false,
        ignoreIfStatements: false,
        ignoreTernaryTests: false,
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        ignorePrimitives: {
            bigint: false,
            boolean: false,
            number: false,
            string: false,
        },
    }],
    '@typescript-eslint/prefer-optional-chain': ['error', {
        checkAny: true,
        checkUnknown: true,
        checkString: true,
        checkNumber: true,
        checkBoolean: true,
        checkBigInt: true,
        requireNullish: false,
    }],
    '@typescript-eslint/prefer-readonly': 'warn',
    // Rule behavior is unpredictable and 3rd-party libraries may not provide read-only types
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': ['warn', {
        allowSingleElementEquality: 'never',
    }],
    // Deprecated. Use @typescript-eslint/ban-ts-comment instead.
    '@typescript-eslint/prefer-ts-expect-error': 'off',
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
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
    }],
    '@typescript-eslint/restrict-template-expressions': ['error', {
        allowAny: false,
        allowArray: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false,
        allowNever: false,
    }],
    '@typescript-eslint/sort-type-constituents': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowString: false,
        allowNumber: false,
        allowNullableEnum: false,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
    }],
    '@typescript-eslint/switch-exhaustiveness-check': ['error', {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
    }],
    '@typescript-eslint/triple-slash-reference': ['error', {
        path: 'never',
        types: 'always',
        lib: 'never',
    }],
    // Deprecated. Use https://eslint.style/rules/ts/type-annotation-spacing.
    '@typescript-eslint/type-annotation-spacing': 'off',
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
        ignoreStatic: false,
    }],
    // TODO: This rule needs support ignoring functions with JSDocs.
    '@typescript-eslint/unified-signatures': ['error', {
        // Allow different parameter names as they suggest different semantics
        ignoreDifferentlyNamedParameters: true,
    }],
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
};
