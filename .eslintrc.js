module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-relative-parent-imports': 'warn',
  },
};
