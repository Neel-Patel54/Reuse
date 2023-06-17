import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import DeviceInfo from 'react-native-device-info';
import CommonButton from '../components/CommonButton';

const DeviceInfoScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [landScape, setLandScape] = useState('');

  useEffect(() => {
    getPhoneNumber();
    isLandscape();
  }, []);

  const getPhoneNumber = () =>
    DeviceInfo.getDeviceName().then(phoneNumber => {
      console.log({phoneNumber});
      setNumber(phoneNumber);
      return phoneNumber;
    });

  const isLandscape = () =>
    DeviceInfo.isLandscape().then(isLandscape => {
      console.log({isLandscape});
      setLandScape(isLandscape);
      // true
      return isLandscape;
    });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>{number}</Text>
      <Text style={{color: 'black'}}>
        {landScape ? 'landscape' : 'potarate'}
      </Text>
      <CommonButton
        title={'Go To SignatureCanvasScreen'}
        disabled={false}
        onPress={() => navigation.navigate('SignatureCanvasScreen')}
      />
    </View>
  );
};

export default DeviceInfoScreen;
