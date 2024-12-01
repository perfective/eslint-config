declare module 'eslint-plugin-cypress/flat' {
    const rules: Record<string, unknown>;
    const configs: {
        globals: {
            languageOptions: {
                globals: Record<string, unknown>;
            };
        };
    };
}
