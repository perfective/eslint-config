export = {
    rules: {
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],
        'import/no-mutable-exports': 'error',
        'import/no-unused-modules': 'error'
    }
};