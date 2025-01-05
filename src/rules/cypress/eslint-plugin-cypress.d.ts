declare module 'eslint-plugin-cypress/flat' {
    const plugin: import('@typescript-eslint/utils').TSESLint.FlatConfig.Plugin & {
        configs: {
            globals: {
                languageOptions: {
                    globals: import('@typescript-eslint/utils').TSESLint.FlatConfig.GlobalsConfig;
                };
            };
        }
    }
    export default plugin;
}
