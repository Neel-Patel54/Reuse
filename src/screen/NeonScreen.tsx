import {View, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';
import CommonButton from '../components/CommonButton';

const NeonScreen = ({navigation}) => {
  const neonLight = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence(
        [
          Animated.timing(neonLight, {
            toValue: 1,
            duration: 500,
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
          width: '100%',
          height: '80%',
          backgroundColor: '#3f3e3e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            width: '70%',
            height: '20%',
            backgroundColor: '#2EFF40',
            shadowColor: '#2EFF40',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight,
            borderWidth: 0.5,
            borderColor: '#2EFF40',
          }}
        />
        <Animated.View
          style={{
            width: '70%',
            height: '20%',
            backgroundColor: 'cyan',
            marginTop: 20,
            shadowColor: 'cyan',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight,
            borderWidth: 0.5,
            borderColor: 'cyan',
          }}
        />
        <Animated.View
          style={{
            width: '70%',
            height: '20%',
            backgroundColor: 'red',
            marginTop: 20,
            shadowColor: 'red',
            shadowOpacity: 3,
            shadowRadius: 20,
            elevation: 10,
            opacity: neonLight,
            borderWidth: 0.5,
            borderColor: 'red',
          }}
        />
      </View>
      <CommonButton
        title={'Go To ChargeAnimation'}
        disabled={false}
        onPress={() => navigation.navigate('ChargeAnimation')}
      />
    </View>
  );
};

export default NeonScreen;
