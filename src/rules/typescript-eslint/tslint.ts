import { typescriptEslintTslintConfig } from './rules/typescript-eslint-tslint-config';

export = {
    plugins: [
        '@typescript-eslint/tslint',
    ],
    rules: {
        '@typescript-eslint/tslint/config': ['warn', typescriptEslintTslintConfig()],
    },
};
