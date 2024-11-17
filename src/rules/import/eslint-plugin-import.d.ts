declare module 'eslint-plugin-import' {
    const flatConfigs: {
        recommended: {
            plugins: {
                import: Record<string, unknown>;
            }
        }
    }
}
