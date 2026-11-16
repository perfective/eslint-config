import { Linter } from 'eslint';

export const performanceRules: Linter.RulesRecord = {
    // Package entry points (`index.ts`) are barrel files.
    'import-x/avoid-barrel-files': ['off', {
        amountOfExportsToConsiderModuleAsBarrel: 3,
    }],
    // Reports imports of most packages (including ESLint plugins), as their entry points are barrel files.
    'import-x/avoid-importing-barrel-files': ['off', {
        allowList: [],
        maxModuleGraphSizeAllowed: 20,
        amountOfExportsToConsiderModuleAsBarrel: 3,
    }],
    // Namespace imports are allowed. See import-x/no-namespace.
    'import-x/avoid-namespace-import': ['off', {
        allowList: [],
    }],
    'import-x/avoid-re-export-all': 'error',
};
