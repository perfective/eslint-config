# Perfective ESLint Config

`@perfective/eslint-config` provides
a [shareable ESLint configuration](https://eslint.org/docs/latest/developer-guide/shareable-configs)
that is used for the development of the `@perfective` packages.
These rules are primarily configured for TypeScript projects.

In addition to the core [ESLint rules](https://eslint.org/docs/latest/rules/),
[`@typescript-eslint`](https://typescript-eslint.io/rules/),
and [ESlint Stylistic](https://eslint.style) plugin rules,
`@perfective/eslint-config` includes configurations for the ESLint plugins:

- [`eslint-plugin-array-func`](https://github.com/freaktechnik/eslint-plugin-array-func);
- [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress) _(optional)_;
- [`eslint-plugin-eslint-comments`](https://eslint-community.github.io/eslint-plugin-eslint-comments/);
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import);
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) _(optional)_;
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom) _(optional)_;
- [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc);
- [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n);
- [`eslint-plugin-prefer-arrow`](https://github.com/TristonJ/eslint-plugin-prefer-arrow);
- [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise);
- [`eslint-plugin-rxjs`](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x) _(optional)_;
- [`eslint-plugin-security`](https://github.com/eslint-community/eslint-plugin-security);
- [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort);
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library) _(optional)_;
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn).

To simplify configuring ESLint support in the IDEs and editors,
the severity of all fixable rules is a `warning`.
In addition, it allows distinguishing errors that have to be fixed manually
from issues that will be fixed automatically.

## Setup

`@perfective/eslint-config` only support ES module syntax.
If your project uses CommonJS by default
you need to use `eslint.config.mjs` file instead of `eslint.config.js` to run it in ESM mode.

1. Install `@perfective/eslint-config` as a dev dependency:

    ```bash
    npm install --save-dev \
        @perfective/eslint-config
    ```

    Required peer dependencies are installed automatically.

2. Import `perfectiveEslintConfig` to `eslint.config.js`.

    ```javascript
    import { perfectiveEslintConfig } from '@perfective/eslint-config';

    const eslintConfig = perfectiveEslintConfig();

    export default eslintConfig;
    ```

3. _Optional_ Install optional peer dependencies to add tool-specific linting rules.

    ```bash
    npm install --save-dev \
        eslint-plugin-cypress \
        eslint-plugin-jest \
        eslint-plugin-jest-dom \
        eslint-plugin-rxjs-x \
        eslint-plugin-testing-library
    ```

    Import configurations to `eslint.config.js`.

    ```javascript
    import { perfectiveEslintConfig } from '@perfective/eslint-config';

    // Optional dependencies.
    import { cypressConfig } from '@perfective/eslint-config/cypress';
    import { jestConfig } from '@perfective/eslint-config/jest';
    import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
    import { rxjsConfig } from '@perfective/eslint-config/rxjs';
    import { testingLibraryConfig } from '@perfective/eslint-config/testing-library';

    const eslintConfig = perfectiveEslintConfig([
        cypressConfig,
        jestConfig,
        jestDomConfig,
        rxjsConfig,
        testingLibraryConfig,
    ]);

    export default eslintConfig;
    ```

4. _Optional_ Customize configuration rules in `eslint.config.js`

    ```javascript
    import { perfectiveEslintConfig, typescriptFiles } from '@perfective/eslint-config';

    const eslintConfig = perfectiveEslintConfig([
        // ...Optional configurations...
        {
            // These rules are overridden to all files
            rules: {
                '@stylistic/indent': ['warn', 2],
            },
        },
        {
            // These rules are overridden to TypeScript files only
            files: typescriptFiles,
            rules: {
                '@stylistic/indent': ['warn', 4],
            },
        },
    ]);

    export default eslintConfig;
    ```

Read full [`documentation`](https://github.com/perfective/eslint-config/blob/main/README.adoc) in the repo.
