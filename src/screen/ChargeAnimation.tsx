import {View, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';
import CommonButton from '../components/CommonButton';

const ChargeAnimation = ({navigation}: any) => {
  const neonLight1 = useRef(new Animated.Value(0.4)).current;
  const neonLight2 = useRef(new Animated.Value(0.4)).current;
  const neonLight3 = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence(
        [
          Animated.timing(neonLight3, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(neonLight2, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(neonLight1, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ],
        {sequence: 20},
      ),
    ).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#3f3e3e',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#2EFF40',
          height: 32,
          width: 70,
          backgroundColor: '#2EFF40',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      />
      <View
        style={{
          width: '60%',
          height: '40%',
          backgroundColor: '#3f3e3e',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#2EFF40',
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#2EFF40',
        }}>
        <Animated.View
          style={{
            width: '70%',
            height: '22%',
            backgroundColor: '#2EFF40',
            shadowColor: '#2EFF40',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight1,
          }}
        />
        <Animated.View
          style={{
            width: '70%',
            height: '22%',
            backgroundColor: '#2EFF40',
            marginTop: 20,
            shadowColor: '#2EFF40',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight2,
          }}
        />
        <Animated.View
          style={{
            width: '70%',
            height: '22%',
            backgroundColor: '#2EFF40',
            marginTop: 20,
            shadowColor: '#2EFF40',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight3,
          }}
        />
      </View>
      <CommonButton
        title={'Go To NeomorphShadowScreen'}
        disabled={false}
        buttonContainerStyle={{marginTop: 100}}
        onPress={() => navigation.navigate('NeomorphShadowScreen')}
      />
    </View>
  );
};

export default ChargeAnimation;
