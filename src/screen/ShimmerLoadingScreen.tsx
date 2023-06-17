import { View, Text } from 'react-native'
import React from 'react'
import CommonButton from '../components/CommonButton';
import ShimmerLoading from '../components/ShimmerLoading';

const ShimmerLoadingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ShimmerLoading />
      <CommonButton
        title={'Go To PickDateTimeScreen'}
        disabled={false}
        onPress={() => navigation.navigate('PickDateTimeScreen')}
      />
    </View>
  );
};

export default ShimmerLoadingScreen