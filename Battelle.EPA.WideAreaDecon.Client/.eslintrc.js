module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',

    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    // 'no-console': 'error',
    // 'no-debugger': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
  ],
};
