import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SmsRetriever from 'react-native-sms-retriever';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';

const PhoneNumberModal = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const handlePhoneNumber = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      setPhone(phoneNumber);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>{phone}</Text>
      <TouchableOpacity
        onPress={() => handlePhoneNumber()}
        style={{
          height: 48,
          width: '70%',
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'black'}}>Open PhoneNumberModal</Text>
      </TouchableOpacity>
      <CommonButton
        title={'Go To ScreenShot'}
        disabled={false}
        onPress={() => navigation.navigate('ScreenShot')}
      />
    </View>
  );
};

export default PhoneNumberModal;
