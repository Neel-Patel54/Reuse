import { View, Text } from 'react-native'
import React from 'react'
import CommonButton from '../components/CommonButton';
import DateTimePicker from '../components/DateTimePicker';

const PickDateTimeScreen = ({navigation}) => {
  return (
    <View>
      <DateTimePicker />
      <CommonButton
        title={'Go To DropDownScreen'}
        disabled={false}
        onPress={() => navigation.navigate('DropDownScreen')}
      />
    </View>
  );
};

export default PickDateTimeScreen