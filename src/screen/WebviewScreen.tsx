import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import CommonButton from '../components/CommonButton';


const WebviewScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://en.wikipedia.org/wiki/Universe'}}
        style={{flex: 1}}
      />
      <CommonButton
        title={'Go To DocumentScannerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('DocumentScannerScreen')}
      />
    </View>
  );
};

export default WebviewScreen