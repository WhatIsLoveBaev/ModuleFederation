module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "@eslint-kit/patch",
        "@eslint-kit/base",
        "@eslint-kit/typescript",
        "@eslint-kit/react"
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
    ],

    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        'import/newline-after-import': ["error", { count: 2 }],
        'import/no-extraneous-dependencies': ["error", { devDependencies: true }],
        'import/no-unresolved': 'off',
        'import/order': ["error", {
            groups: [
                ['builtin', 'external'],
                ['internal'],
                ['index', 'sibling', 'parent']
            ],
            'newlines-between': 'always',
        }],
        'import/first': ["error", 'absolute-first'],
        'jsx-quotes': ['error', 'prefer-single'],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        'semi': ["error", "always"],
        'max-len': ["error", {
            code: 100,
            ignorePattern: 'import \\{?\\s?.*\\s?\\}? from \'.*\';',
        }],
        'no-unused-vars': ['warn'],
        'no-use-before-define': 'off',
        'no-process-env': ["error"],
        'object-curly-newline': ["error", {
            multiline: true, minProperties: 4, consistent: true,
        }],
        quotes: ['warn', 'single'],

        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/indent': ["error"],
        '@typescript-eslint/member-delimiter-style': ["error", {
            multiline: { delimiter: 'semi' },
            singleline: { delimiter: 'comma' },
        }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/ban-ts-ignore': "off",
        "@typescript-eslint/camelcase": "off",

        'react-hooks/rules-of-hooks': ['error'],
        'react/no-array-index-key': ['warn'],
        'react/no-direct-mutation-state': ['error'],
        'react/jsx-boolean-value': ['error'],
        "react/jsx-props-no-spreading": "off",

    }
}

// Rules

// Typescript https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules

// React https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

// Eslint https://eslint.org/docs/rules/