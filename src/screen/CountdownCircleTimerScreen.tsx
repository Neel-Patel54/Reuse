import {View, Text} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const CountdownCircleTimerScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CountdownCircleTimer
        isPlaying
        duration={7200}
        updateInterval={0}
        strokeWidth={22}
        trailStrokeWidth={40}
        strokeLinecap={'butt'}
        isGrowing
        rotation={'counterclockwise'}
        size={320}
        trailColor={'cyan'}
        onComplete={() => {
          // do your stuff here
          return {shouldRepeat: true, delay: 0, updateInterval: 0}; // repeat animation in 1.5 seconds
        }}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}>
        {({remainingTime}) => {
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
          return (
            <Text
              style={{
                color: 'tomato',
                fontSize: 50,
              }}>{`${hours}:${minutes}:${seconds}`}</Text>
          );
        }}
      </CountdownCircleTimer>
      <CommonButton
        title={'Go To CalendarsScreen'}
        disabled={false}
        onPress={() => navigation.navigate('CalendarsScreen')}
      />
    </View>
  );
};

export default CountdownCircleTimerScreen;
