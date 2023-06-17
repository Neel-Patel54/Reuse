import { View, Text } from 'react-native'
import React from 'react'
import CommonButton from '../components/CommonButton';
import CommonDropDown from '../components/CommonDropDown';

const DropDownScreen = ({navigation}) => {
  return (
    <View>
      <CommonDropDown />
      <CommonButton
        title={'Go To NetworkStatusScreen'}
        disabled={false}
        onPress={() => navigation.navigate('NetworkStatusScreen')}
      />
    </View>
  );
};

export default DropDownScreen