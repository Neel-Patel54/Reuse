import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {I18nextProvider} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/navigations/RootNavigator';
import i18n from './src/locales/i18n';
import CommonStatusBar from './src/components/CommonStatusBar';
// import Loader from './src/components/Loader';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <I18nextProvider i18n={i18n}>
        <View style={{flex: 1}}>
          <RootNavigator />
          {/* <Loader isVisible={true} /> */}
          <CommonStatusBar
            backgroundColor={'#FF0000'}
            barStyle={'light-content'}
          />
        </View>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
