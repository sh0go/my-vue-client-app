module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'quotes': ['error', 'single']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
