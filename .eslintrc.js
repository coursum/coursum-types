module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    /* Fix ESLint error of "Cannot read property 'loc' of undefined." */
    // https://github.com/typescript-eslint/typescript-eslint/issues/792#issuecomment-517762395
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',

    /* Import */
    'import/extensions': [
      'error',
      { ts: 'ignorePackages' },
    ],
    'import/order': ['error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'sort-imports': ['error',
      { ignoreDeclarationSort: true },
    ],
  },
};
