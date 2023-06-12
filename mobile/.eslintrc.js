module.exports = {
  root: true,
  extends: ['standard', 'plugin:react-native/all'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'react-native/react-native': true
  },
  rules: {
    // Adicione quaisquer regras adicionais aqui
  },
  plugins: ['react', 'react-native']
}
