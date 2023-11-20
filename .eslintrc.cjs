module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    "no-restricted-syntax": 'off',
    'no-param-reassign': ['warn', { props: false }],
    "react/no-unknown-property": ['error', { ignore: ['css'] }],
    'react/no-array-index-key': 'off',
    "react/function-component-definition": ['error', {
      "namedComponents": ["function-declaration", "function-expression", "arrow-function"],
    }],
    "jsx-a11y/label-has-associated-control": ['error', {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    "react/jsx-no-constructed-context-values": "off",
    "@typescript-eslint/no-explicit-any": "off",
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', 'ts', '.tsx'] }],
    'no-unused-vars': 'warn', // 无用变量
    'no-console': 'warn', // 禁止使用console
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/extensions': 'off',
    "react/button-has-type": 'off',
    // 'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
