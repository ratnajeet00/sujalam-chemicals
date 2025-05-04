// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// You can add custom Metro configuration options here if needed.
// For example:
// config.resolver.assetExts.push('cjs');

module.exports = config;
