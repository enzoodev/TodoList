module.exports = function (api) {
  api.cache(false)
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@services': './src/services',
            '@routes': './src/routes',
            '@dtos': './src/dtos',
            '@theme': './src/theme'
          }
        }
      ]
    ]
  }
}
