import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animation from '../screen/Animation';
import LanguageTranslate from '../screen/LanguageTranslate';
import InputScreen from '../screen/InputScreen';
import ButtonScreen from '../screen/ButtonScreen';
import CollapsibleAccordionScreen from '../screen/CollapsibleAccordionScreen';
import SwitchButtonScreen from '../screen/SwitchButtonScreen';
import RefreshControlScreen from '../screen/RefreshControlScreen';
import AnimatableScreen from '../screen/AnimatableScreen';
import TabViewScreen from '../screen/TabViewScreen';
import CheckBoxScreen from '../screen/CheckBoxScreen';
import ShimmerLoadingScreen from '../screen/ShimmerLoadingScreen';
import PickDateTimeScreen from '../screen/PickDateTimeScreen';
import NetworkStatusScreen from '../screen/NetworkStatusScreen';
import BottomSheetScreen from '../screen/BottomSheetScreen';
import ActionSheetScreen from '../screen/ActionSheetScreen';
import CurrentGeolocationScreen from '../screen/CurrentGeolocationScreen';
import ImagePickerScreen from '../screen/ImagePickerScreen';
import DocumentScreen from '../screen/DocumentScreen';
import ShareDataScreen from '../screen/ShareDataScreen';
import TooltipScreen from '../screen/TooltipScreen';
import BluetoothScreen from '../screen/BluetoothScreen';
import TableScreen from '../screen/TableScreen';
import LottieAnimationScreen from '../screen/LottieAnimationScreen';
import ChatScreen from '../screen/ChatScreen';
import WebviewScreen from '../screen/WebviewScreen';
import DocumentScannerScreen from '../screen/DocumentScannerScreen';
import ReanimatedAnimation from '../screen/ReanimatedAnimation';
import GestureHandlerAnimation from '../screen/GestureHandlerAnimation';
import SwipeView from '../screen/SwipeView';
import PhoneNumberModal from '../screen/PhoneNumberModal';
import ScreenShot from '../screen/ScreenShot';
import NeonScreen from '../screen/NeonScreen';
import ChargeAnimation from '../screen/ChargeAnimation';
import DropDownScreen from '../screen/DropDownScreen';
import NeomorphShadowScreen from '../screen/NeomorphShadowScreen';
import VideoScreen from '../screen/VideoScreen';
import DeviceInfoScreen from '../screen/DeviceInfoScreen';
import SignatureCanvasScreen from '../screen/SignatureCanvasScreen';
import EmojiAndColorPicker from '../screen/EmojiAndColorPicker';
import ConfirmationInput from '../screen/ConfirmationInput';
import RatingsScreen from '../screen/RatingsScreen';
import DraggableFlatlist from '../screen/DraggableFlatlist';
import ReadMoreText from '../screen/ReadMoreText';
import SwitchSelectorScreen from '../screen/SwitchSelectorScreen';
import PhotoEditorScreen from '../screen/PhotoEditorScreen';
import TextTickerScreen from '../screen/TextTickerScreen';
import BackgroundTimerScreen from '../screen/BackgroundTimerScreen';
import TimeLineFlatListScreen from '../screen/TimeLineFlatListScreen';
import ProgressStepScreen from '../screen/ProgressStepScreen';
import SimpleDialogsScreen from '../screen/SimpleDialogsScreen';
import ReanimatedCarouselScreen from '../screen/ReanimatedCarouselScreen';
import PagerViewScreen from '../screen/PagerViewScreen';
import ResponsiveImageViewScreen from '../screen/ResponsiveImageViewScreen';
import QrcodeScannerScreen from '../screen/QrcodeScannerScreen';
import CameraRollScreen from '../screen/CameraRollScreen';
import CountdownCircleTimerScreen from '../screen/CountdownCircleTimerScreen';
import CalendarsScreen from '../screen/CalendarsScreen';
import SwipeButtonScreen from '../screen/SwipeButtonScreen';
import QRGeneratorScreen from '../screen/QRGeneratorScreen';
import ZoomImageScreen from '../screen/ZoomImageScreen';
import WheelyScreen from '../screen/WheelyScreen';
import ClipboardScreen from '../screen/ClipboardScreen';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ClipboardScreen">
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="LanguageTranslate" component={LanguageTranslate} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen
          name="CollapsibleAccordionScreen"
          component={CollapsibleAccordionScreen}
        />
        <Stack.Screen
          name="SwitchButtonScreen"
          component={SwitchButtonScreen}
        />
        <Stack.Screen
          name="RefreshControlScreen"
          component={RefreshControlScreen}
        />
        <Stack.Screen name="AnimatableScreen" component={AnimatableScreen} />
        <Stack.Screen name="TabViewScreen" component={TabViewScreen} />
        <Stack.Screen name="CheckBoxScreen" component={CheckBoxScreen} />
        <Stack.Screen
          name="ShimmerLoadingScreen"
          component={ShimmerLoadingScreen}
        />
        <Stack.Screen
          name="PickDateTimeScreen"
          component={PickDateTimeScreen}
        />
        <Stack.Screen name="DropDownScreen" component={DropDownScreen} />
        <Stack.Screen
          name="NetworkStatusScreen"
          component={NetworkStatusScreen}
        />
        <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} />
        <Stack.Screen name="ActionSheetScreen" component={ActionSheetScreen} />
        <Stack.Screen
          name="CurrentGeolocationScreen"
          component={CurrentGeolocationScreen}
        />
        <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />
        <Stack.Screen name="DocumentScreen" component={DocumentScreen} />
        <Stack.Screen name="ShareDataScreen" component={ShareDataScreen} />
        <Stack.Screen name="TooltipScreen" component={TooltipScreen} />
        <Stack.Screen name="BluetoothScreen" component={BluetoothScreen} />
        <Stack.Screen name="TableScreen" component={TableScreen} />
        <Stack.Screen
          name="LottieAnimationScreen"
          component={LottieAnimationScreen}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="WebviewScreen" component={WebviewScreen} />
        <Stack.Screen
          name="DocumentScannerScreen"
          component={DocumentScannerScreen}
        />
        <Stack.Screen
          name="ReanimatedAnimation"
          component={ReanimatedAnimation}
        />
        <Stack.Screen
          name="GestureHandlerAnimation"
          component={GestureHandlerAnimation}
        />
        <Stack.Screen name="SwipeView" component={SwipeView} />
        <Stack.Screen name="PhoneNumberModal" component={PhoneNumberModal} />
        <Stack.Screen name="ScreenShot" component={ScreenShot} />
        <Stack.Screen
          name="NeonScreen"
          component={NeonScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChargeAnimation"
          component={ChargeAnimation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NeomorphShadowScreen"
          component={NeomorphShadowScreen}
        />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="DeviceInfoScreen" component={DeviceInfoScreen} />
        <Stack.Screen
          name="SignatureCanvasScreen"
          component={SignatureCanvasScreen}
        />
        <Stack.Screen
          name="EmojiAndColorPicker"
          component={EmojiAndColorPicker}
        />
        <Stack.Screen name="ConfirmationInput" component={ConfirmationInput} />
        <Stack.Screen name="RatingsScreen" component={RatingsScreen} />
        <Stack.Screen name="DraggableFlatlist" component={DraggableFlatlist} />
        <Stack.Screen name="ReadMoreText" component={ReadMoreText} />
        <Stack.Screen
          name="SwitchSelectorScreen"
          component={SwitchSelectorScreen}
        />
        <Stack.Screen name="PhotoEditorScreen" component={PhotoEditorScreen} />
        <Stack.Screen name="TextTickerScreen" component={TextTickerScreen} />
        <Stack.Screen
          name="BackgroundTimerScreen"
          component={BackgroundTimerScreen}
        />
        <Stack.Screen
          name="TimeLineFlatListScreen"
          component={TimeLineFlatListScreen}
        />
        <Stack.Screen
          name="ProgressStepScreen"
          component={ProgressStepScreen}
        />
        <Stack.Screen
          name="SimpleDialogsScreen"
          component={SimpleDialogsScreen}
        />
        <Stack.Screen
          name="ReanimatedCarouselScreen"
          component={ReanimatedCarouselScreen}
        />
        <Stack.Screen name="PagerViewScreen" component={PagerViewScreen} />
        <Stack.Screen
          name="ResponsiveImageViewScreen"
          component={ResponsiveImageViewScreen}
        />
        <Stack.Screen
          name="QrcodeScannerScreen"
          component={QrcodeScannerScreen}
        />
        <Stack.Screen name="CameraRollScreen" component={CameraRollScreen} />
        <Stack.Screen
          name="CountdownCircleTimerScreen"
          component={CountdownCircleTimerScreen}
        />
        <Stack.Screen name="CalendarsScreen" component={CalendarsScreen} />
        <Stack.Screen name="SwipeButtonScreen" component={SwipeButtonScreen} />
        <Stack.Screen name="QRGeneratorScreen" component={QRGeneratorScreen} />
        <Stack.Screen name="ZoomImageScreen" component={ZoomImageScreen} />
        <Stack.Screen name="WheelyScreen" component={WheelyScreen} />
        <Stack.Screen name="ClipboardScreen" component={ClipboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

// Implement navigation require steps:

// 1. npm install @react-navigation/native
// 2. npm install react-native-screens react-native-safe-area-context
// 3. Add code in MainActivity.java file
/*@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(null);
}*/
// 4. npm install @react-navigation/native-stack
// 5. npm install react-native-gesture-handler react-native-reanimated(require for react-native-tab-view)

//required: add plugins: ['react-native-reanimated/plugin'], line in babel.config,js then yarn start --reset-cache or npm start -- --reset-cache

// => react-native-tab-view
// 2. npm install react-native-screens react-native-safe-area-context
// 5. npm install react-native-gesture-handler react-native-reanimated(require for react-native-tab-view)
//required: add plugins: ['react-native-reanimated/plugin'], line in babel.config,js then yarn start --reset-cache or npm start -- --reset-cache
// @react-native-community/viewpager this package requires for react-native-tab-view(fix this error: Invariant Violation: requireNativeComponent: "RNCViewPager" was not found in the UIManager)
