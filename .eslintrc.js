module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:promise/recommended',
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:jsdoc/recommended',
  ],
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
    quotes: ['error', 'single'],
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
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
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
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.vue'],
      rules: { indent: 'off', 'vue/script-indent': ['error', 2, { baseIndent: 1 }] },
    },
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        slot: 'slot',
      },
    },
  },
}
