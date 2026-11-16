import { Linter } from 'eslint';

export const moduleSystemsRules: Linter.RulesRecord = {
    'import-x/no-amd': 'error',
    'import-x/no-commonjs': ['error', {
        allowConditionalRequire: true,
        allowPrimitiveModules: true,
    }],
    'import-x/no-import-module-exports': 'error',
    // TODO: Research usage
    'import-x/no-nodejs-modules': 'off',
    'import-x/unambiguous': 'error',
};
