export { perfectiveEslintConfig } from './config/perfective-eslint-config';

// ./linter
export {
    configurationFiles,
    cypressFiles,
    Glob,
    javascriptFiles,
    jestFiles,
    jsxFiles,
    tsxFiles,
    typescriptDeclarationFiles,
    typescriptFiles,
} from './linter/glob';
export {
    javascriptLanguageOptions,
    languageOptions,
    typescriptLanguageOptions,
} from './linter/language-options';
export {
    LinterConfig,
    linterConfig,
} from './linter/linter-config';
export {
    hasEslintPlugin,
    optionalRule,
} from './linter/plugin';
