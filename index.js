/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// "scripts": {
//     "android": "react-native run-android",
//     "ios": "react-native run-ios",
//     "start": "react-native start",
//     "bundle-android": "react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/",
//     "android:build": "cd android && ./gradlew clean && ./gradlew assembleRelease",
//     "bundle-ios": "react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios",
//     "test": "jest",
//     "lint": "eslint .",
//     "lint-fix": "eslint . --fix"
//   },
