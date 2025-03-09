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
- [`eslint-plugin-eslint-comments`](https://mysticatea.github.io/eslint-plugin-eslint-comments/);
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import);
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) _(optional)_;
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom) _(optional)_;
- [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc);
- [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n);
- [`eslint-plugin-prefer-arrow`](https://github.com/TristonJ/eslint-plugin-prefer-arrow);
- [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise);
- [`eslint-plugin-rxjs`](https://github.com/cartant/eslint-plugin-rxjs) _(optional)_;
- [`eslint-plugin-security`](https://github.com/eslint-community/eslint-plugin-security);
- [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort);
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library) _(optional)_;
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn).

To simplify configuring ESLint support in the IDEs and editors,
the severity of all fixable rules is a `warning`.
In addition, it allows distinguishing errors that have to be fixed manually
from issues that will be fixed automatically.

## Setup

1. Require `@perfective/eslint-config` and its peer dependencies as dev dependencies.

    ```bash
    npm install --save-dev \
        @perfective/eslint-config \
        @stylistic/eslint-plugin \
        @stylistic/eslint-plugin-js \
        @stylistic/eslint-plugin-jsx \
        @stylistic/eslint-plugin-ts \
        @stylistic/eslint-plugin-plus \
        eslint \
        eslint-import-resolver-typescript \
        eslint-plugin-array-func \
        eslint-plugin-eslint-comments \
        eslint-plugin-import \
        eslint-plugin-jsdoc \
        eslint-plugin-n \
        eslint-plugin-prefer-arrow \
        eslint-plugin-promise \
        eslint-plugin-security \
        eslint-plugin-simple-import-sort \
        eslint-plugin-unicorn \
        typescript-eslint
    ```

2. Require the configuration in your root `eslint.config.js`.

    ```javascript
    import perfectiveEslintConfig from '@perfective/eslint-config';

    export default perfectiveEslintConfig;
    ```

3. Install optional peer dependencies that add linting rules for the tools you use.

    ```bash
    npm install --save-dev \
        @smarttools/eslint-plugin-rxjs \
        eslint-plugin-cypress \
        eslint-plugin-jest \
        eslint-plugin-jest-dom \
        eslint-plugin-testing-library
    ```

    The `@perfective/eslint-config` automatically includes rules for these plugins,
    if the dependency is installed.

4. Add optional configurations to your root `eslint.config.js`.

    ```javascript
    import perfectiveEslintConfig from '@perfective/eslint-config';

    // Optional dependencies.
    import { cypressConfig } from '@perfective/eslint-config/cypress';
    import { jestConfig } from '@perfective/eslint-config/jest';
    import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
    import { rxjsConfig } from '@perfective/eslint-config/rxjs';
    import { testingLibraryConfig } from '@perfective/eslint-config/testing-library';

    const eslintConfig = [
        ...perfectiveEslintConfig,
        cypressConfig(),
        jestConfig(),
        jestDomConfig(),
        rxjsConfig(),
        testingLibraryConfig(),
    ];

    export default eslintConfig;
    ```
