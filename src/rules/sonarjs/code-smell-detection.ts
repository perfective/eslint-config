export = {
    rules: {
        // Regular complexity with strict settings limit function complexity
        'sonarjs/cognitive-complexity': ['off', 5],
        // This rule should be based on exhaustiveness, not count
        'sonarjs/max-switch-cases': 'off',
        'sonarjs/no-collapsible-if': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        // This rule fails to recognize string-based properties, like element['property-a']
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-duplicated-branches': 'error',
        // TODO: This rule fails to recognize different default arguments,
        //  which can be used for named functions currying.
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-redundant-jump': 'error',
        'sonarjs/no-same-line-conditional': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/no-unused-collection': 'error',
        'sonarjs/no-useless-catch': 'error',
        'sonarjs/prefer-immediate-return': 'warn',
        'sonarjs/prefer-object-literal': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',
        'sonarjs/prefer-while': 'warn',
    },
};
