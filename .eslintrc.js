module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    // override/add rules settings here, such as:
    'no-unused-vars': 1
  },
}
