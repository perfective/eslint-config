import { Linter } from 'eslint';
import eslintPluginSecurity from 'eslint-plugin-security';

import { ecmaFiles, Glob } from '../../linter/glob';

export function securityConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            security: eslintPluginSecurity,
        },
        rules: {
            'security/detect-bidi-characters': 'error',
            'security/detect-buffer-noassert': 'error',
            'security/detect-child-process': 'error',
            'security/detect-disable-mustache-escape': 'error',
            'security/detect-eval-with-expression': 'error',
            'security/detect-new-buffer': 'error',
            'security/detect-no-csrf-before-method-override': 'error',
            'security/detect-non-literal-fs-filename': 'error',
            'security/detect-non-literal-regexp': 'error',
            'security/detect-non-literal-require': 'error',
            'security/detect-object-injection': 'error',
            'security/detect-possible-timing-attacks': 'error',
            'security/detect-pseudoRandomBytes': 'error',
            'security/detect-unsafe-regex': 'error',
        },
    };
}
