import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import CommonButton from '../components/CommonButton';

const LottieAnimationScreen = ({navigation}) => {
  return (
    <View>
      <Lottie
        source={require('../assets/test.json')}
        autoPlay
        loop
        style={{height: 150, width: 150}}
      />
      <CommonButton
        title={'Go To ChatScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ChatScreen')}
      />
    </View>
  );
};

export default LottieAnimationScreen