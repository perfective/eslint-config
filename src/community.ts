export = {
    extends: './',
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: jsCommunityOverrides(),
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                ...jsCommunityOverrides(),
            },
        },
        {
            files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
            rules: {},
        },
    ],
};

function jsCommunityOverrides(): Record<string, unknown> {
    return {
    };
}
