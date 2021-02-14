export = {
    env: {
        // Overrides only extend this environment, but not other overrides (unlike rules and plugins)
        es6: true,
    },
    ignorePatterns: ['**/*.d.ts', '**/dist'],
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            parser: 'babel-eslint',
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
                sourceType: 'module',
            },
            extends: [
                './rules/eslint',
                './rules/array-func',
                './rules/eslint-comments',
                './rules/import',
                './rules/jsdoc',
                './rules/node',
                './rules/prefer-arrow',
                './rules/promise',
                './rules/simple-import-sort',
                './rules/sonarjs',
                './rules/unicorn',
            ],
            settings: {
                'import/extensions': ['.js', '.jsx'],
            },
            rules: {
                'import/no-commonjs': 'off',
                'import/no-extraneous-dependencies': ['error', {
                    // TODO: This list should be extracted into a function to allow overrides
                    devDependencies: [
                        '**/.*.js',
                        '**/*.config.js',
                        '**/gulpfile.js',
                    ],
                    optionalDependencies: false,
                    peerDependencies: false,
                }],
                'import/unambiguous': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
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
            extends: [
                // JavaScript rules
                './rules/eslint',
                './rules/array-func',
                './rules/eslint-comments',
                './rules/import',
                './rules/jsdoc',
                './rules/node',
                './rules/prefer-arrow',
                './rules/promise',
                './rules/simple-import-sort',
                './rules/sonarjs',
                './rules/unicorn',
                // TypeScript rules
                './rules/typescript-eslint',
                './rules/typescript-eslint/tslint',
                './rules/deprecation',
                './rules/rxjs',
            ],
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
        },
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
            // TBD: Should environment be a part of the files overrides?
            env: {
                'jest': true,
                // TBD: Is the above option sufficient and can the below option be removed?
                'jest/globals': true,
            },
            extends: [
                './rules/jest',
                './rules/jest-dom',
                './rules/jest-formatting',
                './rules/testing-library',
            ],
            rules: {
                '@typescript-eslint/ban-ts-comment': ['error', {
                    'ts-expect-error': 'allow-with-description',
                }],
                '@typescript-eslint/init-declarations': 'off',
                'import/no-extraneous-dependencies': ['error', {
                    // TODO: This list should be extracted into a function to allow overrides
                    devDependencies: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
                    optionalDependencies: false,
                    peerDependencies: false,
                }],
                'max-nested-callbacks': ['error', 4],
                // Conflicts with func-style inside describe()
                'prefer-arrow/prefer-arrow-functions': 'off',
                // In tests the last step of a Promise is to run "expect".
                // TODO: This rule can be improved by allowing configuring functions when Promise<void> is expected.
                'promise/always-return': 'off',
                // Passing promise is required for async testing
                'rxjs/no-topromise': 'off',
            },
        },
        {
            // Arbitrary choice for Cypress file extensions
            files: ['*.e2e.ts', '*.cy.ts', '*.e2e.js', '*.cy.js'],
            env: {
                'cypress/globals': true,
            },
            extends: [
                './rules/cypress',
            ],
            rules: {
                '@typescript-eslint/init-declarations': 'off',
                'import/no-extraneous-dependencies': ['error', {
                    // TODO: This list should be extracted into a function to allow overrides
                    devDependencies: ['**/*.e2e.ts', '**/*.cy.ts', '**/*.e2e.js', '**/*.cy.js'],
                    optionalDependencies: false,
                    peerDependencies: false,
                }],
                'max-nested-callbacks': ['error', 4],
            },
        },
    ],
};
