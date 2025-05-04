module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Make sure reanimated plugin is the last item in the plugins array
      "react-native-reanimated/plugin"
    ],
    env: {
      production: {
        // Production optimizations can be added here if supported
      }
    }
  };
};
