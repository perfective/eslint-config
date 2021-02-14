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
        'object-curly-newline': ['error', {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ImportDeclaration: { multiline: true },
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            ExportDeclaration: { multiline: true },
        }],
    };
}
