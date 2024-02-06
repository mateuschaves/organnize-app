module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@store': './src/store',
            '@navigations': './src/navigations',
            '@services': './src/services',
            '@constants': './src/constants',
          },
        },
      ],
    ],
  };
};
