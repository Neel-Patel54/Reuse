import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import CommonButton from '../components/CommonButton';

const ReanimatedAnimation = ({navigation}) => {
  const sharedValue = useSharedValue(0);
  const [isAnimation, setIsAnimation] = useState(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: sharedValue.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>ReanimatedAnimation</Text>
      <Animated.View
        style={[
          {height: 100, width: 100, backgroundColor: 'red'},
          animatedStyle,
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          if (isAnimation) {
            sharedValue.value = withTiming(100, {duration: 1500});
            setIsAnimation(false);
          } else {
            // sharedValue.value = withSpring(0);
            sharedValue.value = withTiming(0, {duration: 1500});
            setIsAnimation(true);
          }
        }}
        style={{
          width: 200,
          height: 48,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}>
        <Text style={{color: 'white'}}>Click me</Text>
      </TouchableOpacity>
      <CommonButton
        title={'Go To GestureHandlerAnimation'}
        disabled={false}
        onPress={() => navigation.navigate('GestureHandlerAnimation')}
      />
    </View>
  );
};

export default ReanimatedAnimation;
