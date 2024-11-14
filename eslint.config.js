const eslintrc = require('@eslint/eslintrc');

const compat = new eslintrc.FlatCompat({
    baseDirectory: __dirname,
});

module.exports = Array.from(compat.extends('./dist'));
