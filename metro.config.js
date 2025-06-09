const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Don't duplicate source extensions - Metro already handles tsx/ts
// The issue might be we're adding duplicates
console.log('Original sourceExts:', config.resolver.sourceExts);

module.exports = withNativeWind(config, { 
  input: './global.css'
});
