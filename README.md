# Perfective ESLint Config

`@perfective/eslint-config` provides
a [shareable ESLint configuration](https://eslint.org/docs/latest/developer-guide/shareable-configs)
that is used for the development of the `@perfective` packages.
These rules are primarily configured for TypeScript projects.

In addition to the core [ESLint rules](https://eslint.org/docs/latest/rules/),
[`@typescript-eslint`](https://typescript-eslint.io/rules/),
and [ESlint Stylistic](https://eslint.style) plugin rules,
`@perfective/eslint-config` includes configurations for the ESLint plugins:

-   [`eslint-plugin-array-func`](https://github.com/freaktechnik/eslint-plugin-array-func);
-   [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress) _(optional)_;
-   [`eslint-plugin-deprecation`](https://github.com/gund/eslint-plugin-deprecation);
-   [`eslint-plugin-eslint-comments`](https://mysticatea.github.io/eslint-plugin-eslint-comments/);
-   [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import);
-   [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) _(optional)_;
-   [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom) _(optional)_;
-   [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
    _(optional, required if `eslint-plugin-jest` is installed)_;
-   [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc);
-   [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n);
-   [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node);
-   [`eslint-plugin-prefer-arrow`](https://github.com/TristonJ/eslint-plugin-prefer-arrow);
-   [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise);
-   [`eslint-plugin-rxjs`](https://github.com/cartant/eslint-plugin-rxjs) _(optional)_;
-   [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort);
-   [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs);
-   [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library) _(optional)_;
-   [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn).

To simplify configuring ESLint support in the IDEs and editors,
the severity of all fixable rules is a `warning`.
In addition, it allows distinguishing errors that have to be fixed manually
from issues that will be fixed automatically.

## Setup

1. Require `@perfective/eslint-config` and its peer dependencies as dev dependencies.

    ```bash
    npm install --save-dev \
        @perfective/eslint-config \
        @babel/eslint-parser \
        @stylistic/eslint-plugin \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/eslint-plugin-tslint \
        @typescript-eslint/parser \
        eslint \
        eslint-import-resolver-typescript \
        eslint-plugin-array-func \
        eslint-plugin-deprecation \
        eslint-plugin-eslint-comments \
        eslint-plugin-import \
        eslint-plugin-jsdoc \
        eslint-plugin-n \
        eslint-plugin-node \
        eslint-plugin-prefer-arrow \
        eslint-plugin-promise \
        eslint-plugin-simple-import-sort \
        eslint-plugin-sonarjs \
        eslint-plugin-unicorn \
        tslint
    ```

2. Install optional peer dependencies that add linting rules for the tools you use.

    ```bash
    npm install --save-dev \
        eslint-plugin-cypress \
        eslint-plugin-jest \
        eslint-plugin-jest-dom \
        eslint-plugin-jest-formatting \
        eslint-plugin-rxjs \
        eslint-plugin-testing-library
    ```

    The `eslint-plugin-jest-formatting` module is required,
    if the `eslint-plugin-jest` module is installed.

    The `@perfective/eslint-config` automatically includes rules for these plugins,
    if the dependency is installed.

3. Require the configuration in your root `.eslintrc.js`.

    ```javascript
    module.exports = {
        extends: ['@perfective/eslint-config'],
    };
    ```

## TSLint

ESLint and its plugins replace most of the [TSLint](https://palantir.github.io/tslint/) rules.
Yet, a few rules still need to be supported.
TSLint rules are executed using the
[ESLint Plugin TSLint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin-tslint).

Read the [full documentation](https://github.com/perfective/eslint-config/blob/main/README.adoc)
in the repository.
