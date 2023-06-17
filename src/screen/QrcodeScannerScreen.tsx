import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
// import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCodeScanner from '../utils/ScanQrCode';
// import {RNCamera} from 'react-native-camera';
import { RNCamera } from 'react-native-infy-camera';
import CommonButton from '../components/CommonButton';

const QrcodeScannerScreen = ({navigation}) => {
  const onSuccess = (e: any) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate
        showMarker
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <CommonButton
        title={'Go To CameraRollScreen'}
        disabled={false}
        onPress={() => navigation.navigate('CameraRollScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrcodeScannerScreen;
// npm i react-native-qrcode-scanner
// npm install react-native-camera --save
// npm install react-native-permissions --save
/* <uses-permission android:name="android.permission.VIBRATE" />; */ //<= Add in androidmanifest.xml
// defaultConfig {
//         applicationId "com.reuse"
//         minSdkVersion rootProject.ext.minSdkVersion
//         targetSdkVersion rootProject.ext.targetSdkVersion
//         versionCode 1
//         versionName "1.0"
//         missingDimensionStrategy 'react-native-camera', 'general' <= Add this lien in android/app/build.gradle
//     }
