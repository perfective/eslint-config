import { plugin } from 'typescript-eslint';

import { extensionRules } from './extension-rules';
import { supportedRules } from './supported-rules';

export const typescriptEslintConfig = {
    plugins: {
        '@typescript-eslint': plugin,
    },
    rules: {
        ...supportedRules,
        ...extensionRules,
    },
};
