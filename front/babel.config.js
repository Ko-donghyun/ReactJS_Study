module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
  ],
};
