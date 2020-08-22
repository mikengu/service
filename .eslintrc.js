module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'key-spacing': ['error',
      {
        mode: 'strict'
      }
    ],
    'object-curly-spacing': ['error', 'never'
    ],
    'array-bracket-spacing': ['error', 'never'
    ],
    '@typescript-eslint/no-unused-vars': [
      'error'
    ]
  }
}