import { Linter } from 'eslint';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';

import { ecmaFiles, Glob } from '../../linter/glob';

export function perfectionistConfig(files: Glob[] = ecmaFiles): Linter.Config {
    return {
        files,
        plugins: {
            perfectionist: eslintPluginPerfectionist,
        },
        rules: {
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-array-includes': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-arrays': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-classes': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-constructor-parameters': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-decorators': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-enums': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-export-attributes': 'off',
            // Use `simple-import-sort/exports`.
            'perfectionist/sort-exports': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-heritage-clauses': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-import-attributes': 'off',
            // Use `simple-import-sort/imports`.
            'perfectionist/sort-imports': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-interfaces': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-intersection-types': 'off',
            'perfectionist/sort-jsx-props': ['warn', {
                // Replaces the deprecated `@stylistic/jsx-sort-props` rule with the same order:
                // reserved props first, then shorthand props, then other props, then callbacks.
                type: 'alphabetical',
                order: 'asc',
                fallbackSort: {
                    type: 'unsorted',
                },
                alphabet: '',
                ignoreCase: false,
                specialCharacters: 'keep',
                locales: 'en-US',
                customGroups: [
                    {
                        groupName: 'reserved',
                        elementNamePattern: '^(children|dangerouslySetInnerHTML|key|ref)$',
                    },
                    {
                        groupName: 'callback',
                        elementNamePattern: '^on[A-Z]',
                    },
                ],
                groups: [
                    'reserved',
                    'shorthand-prop',
                    'prop',
                    'callback',
                ],
                // `@stylistic/jsx-sort-props` does not check blank lines between props
                // and does not split props into partitions by blank lines.
                newlinesBetween: 'ignore',
                newlinesInside: 'ignore',
                partitionByNewLine: false,
                useConfigurationIf: {},
            }],
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-maps': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-modules': 'off',
            // Use `simple-import-sort/exports`.
            'perfectionist/sort-named-exports': 'off',
            // Use `simple-import-sort/imports`.
            'perfectionist/sort-named-imports': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-object-types': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-objects': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-sets': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-switch-case': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-union-types': 'off',
            // TODO: Not evaluated yet (see ROADMAP.adoc).
            'perfectionist/sort-variable-declarations': 'off',
        },
    };
}
