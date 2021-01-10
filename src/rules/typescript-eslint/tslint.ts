import { typescriptEslintTslintConfig } from './rules/typescript-eslint-tslint-config';

export = {
    rules: {
        '@typescript-eslint/tslint/config': ['warn', typescriptEslintTslintConfig()],
    },
};
