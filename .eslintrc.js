const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx']

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: './',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'unicorn', 'import', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
    ],
    settings: {
        'import/extensions': allExtensions,
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: allExtensions,
            },
        },
        'import/docstyle': ['jsdoc', 'tomdoc'],
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                functions: 'never',
            },
        ],
        'arrow-parens': ['error', 'always'],
        semi: ['error', 'never'],
        indent: [
            'error',
            2,
            {
                SwitchCase: 1,
                VariableDeclarator: 2,
                outerIIFEBody: 0,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 'first' },
                FunctionExpression: { parameters: 'first' },
                CallExpression: { arguments: 'first' },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
            },
        ],
        'no-var': 'error',
        'unicorn/filename-case': [
            'error',
            { cases: { pascalCase: true, kebabCase: true } },
        ],
        'unicorn/prevent-abbreviations': [
            'error',
            {
                extendDefaultReplacements: false,
                replacements: {
                    e: {
                        event: true,
                    },
                    er: {
                        error: true,
                    },
                    err: {
                        error: true,
                    },
                    warn: {
                        warning: true,
                    },
                    val: {
                        value: true,
                    },
                },
            },
        ],
    },
}