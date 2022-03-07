module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Config: './src/Config',
          Constants: './src/Constants',
          Themes: './src/Themes',
          Assets: './assets',
          Navigation: './src/Navigation',
          Components: './src/Components',
          Screens: './src/Screens',
          Mock: './src/Mock',
          Api: './src/Api',
          Custom: './src/Custom',
          Helper: './src/Helper'
        },
      },
    ],
  ],
};
