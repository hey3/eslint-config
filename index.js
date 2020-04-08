
module.exports = {
  extends: ['./rules/eslint.js', './rules/typescript.js', './rules/react.js'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'no-use-before-define': 'off',
  },
}