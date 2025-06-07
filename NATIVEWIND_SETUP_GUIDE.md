# NativeWind Setup Guide for React Native Expo

This document explains how to properly configure NativeWind (Tailwind CSS for React Native) in an Expo project and troubleshoot common configuration issues.

## Overview

NativeWind allows you to use Tailwind CSS utility classes directly in React Native components through the `className` prop, providing a familiar web-like styling experience for mobile development.

## Dependencies Required

### Core Dependencies
```json
{
  "dependencies": {
    "expo": "~53.0.10",
    "nativewind": "^4.1.23",
    "react": "19.0.0",
    "react-native": "0.79.3"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "tailwindcss": "^3.3.2",
    "typescript": "~5.8.3"
  }
}
```

### Installation Commands
```bash
npm install nativewind
npm install --save-dev tailwindcss
npx tailwindcss init
```

## Required Configuration Files

### 1. `babel.config.js` - Critical Configuration
The Babel configuration is the most crucial part for NativeWind v4 to work properly:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [],
  };
};
```

**Key Points:**
- Must include `nativewind/babel` as a preset (not plugin)
- The `jsxImportSource: 'nativewind'` option is essential for NativeWind v4
- Order matters: `babel-preset-expo` first, then `nativewind/babel`

### 2. `metro.config.js` - Metro Bundler Configuration
```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { 
  input: './global.css'
});
```

**Key Points:**
- Wraps the default Expo Metro config with `withNativeWind`
- Points to the CSS file containing Tailwind imports
- This enables CSS processing in the Metro bundler

### 3. `tailwind.config.js` - Tailwind Configuration
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Key Points:**
- Must include `nativewind/preset` in presets array
- Content array should match your project structure
- The preset handles React Native-specific Tailwind adaptations

### 4. `global.css` - Tailwind CSS Imports
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Key Points:**
- Must be imported in your main App component
- Contains the standard Tailwind CSS imports
- Referenced in `metro.config.js` as the input file

### 5. `nativewind-env.d.ts` - TypeScript Declarations
```typescript
/// <reference types="nativewind/types" />

// NOTE: This file should not be edited and should be in your tsconfig.json include array.
```

**Key Points:**
- Required for TypeScript support
- Provides type definitions for className prop
- Must be included in `tsconfig.json`

### 6. `tsconfig.json` - TypeScript Configuration
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "nativewind-env.d.ts"
  ]
}
```

**Key Points:**
- Must include `nativewind-env.d.ts` in the include array
- Enables TypeScript to recognize className props

## Component Usage

### Basic Component with NativeWind
```tsx
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"; // Import CSS file

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-600 p-6">
      <View className="bg-orange-500 p-8 rounded-xl mb-6 shadow-lg">
        <Text className="text-3xl font-bold text-white text-center">
          🎨 NativeWind Colors
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
```

**Key Points:**
- Import `global.css` in your main App component
- Use `className` prop instead of `style` prop
- All standard Tailwind utility classes are available
- No need for StyleSheet or inline styles

## Common Issues and Solutions

### Issue 1: "plugins is not a valid Plugin property" Error
**Cause:** Incorrect Babel configuration syntax for NativeWind v4
**Solution:** Use presets array instead of plugins array for NativeWind

**❌ Incorrect:**
```javascript
plugins: ['nativewind/babel']
```

**✅ Correct:**
```javascript
presets: [
  ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
  'nativewind/babel',
]
```

### Issue 2: Styles Not Applying (className has no effect)
**Cause:** Missing or incorrect Babel configuration
**Solutions:**
1. Ensure `nativewind/babel` is in presets array
2. Clear Metro cache: `npx expo start --clear`
3. Verify `global.css` is imported in App component
4. Check that `metro.config.js` has correct `withNativeWind` wrapper

### Issue 3: TypeScript Errors on className Prop
**Cause:** Missing TypeScript declarations
**Solutions:**
1. Create `nativewind-env.d.ts` file
2. Add it to `tsconfig.json` include array
3. Restart TypeScript server in VS Code

### Issue 4: Metro Bundler Errors
**Cause:** Conflicting Metro configurations
**Solutions:**
1. Ensure only one Metro config exists
2. Use `withNativeWind` wrapper correctly
3. Clear Metro cache and restart server

## Development Workflow

### 1. Initial Setup
```bash
# Install dependencies
npm install nativewind
npm install --save-dev tailwindcss

# Initialize Tailwind config
npx tailwindcss init
```

### 2. Configure Files
- Set up all configuration files as shown above
- Import `global.css` in main App component

### 3. Development
```bash
# Always clear cache when changing Babel/Metro config
npx expo start --clear

# Regular development
npx expo start
```

### 4. Testing Styles
- Use simple utility classes first (bg-red-500, text-white)
- Build up to complex layouts gradually
- Check Metro bundler logs for CSS processing errors

## Troubleshooting Checklist

When NativeWind styles aren't working:

1. ✅ **Babel Configuration**: Is `nativewind/babel` in presets array?
2. ✅ **Metro Configuration**: Is `withNativeWind` wrapper applied?
3. ✅ **CSS Import**: Is `global.css` imported in App component?
4. ✅ **Content Paths**: Does `tailwind.config.js` include all component paths?
5. ✅ **Cache**: Did you clear Metro cache after config changes?
6. ✅ **TypeScript**: Is `nativewind-env.d.ts` included in tsconfig?

## Key Success Factors

1. **Correct Babel Setup**: The most critical configuration
2. **Cache Management**: Always clear cache after config changes
3. **File Structure**: All config files must be in project root
4. **Import Order**: CSS import must be in main component
5. **Version Compatibility**: Use compatible versions of all packages

This setup provides a robust foundation for using Tailwind CSS in React Native Expo projects with NativeWind v4.
