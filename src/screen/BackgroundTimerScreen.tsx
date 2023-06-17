import {View, Text} from 'react-native';
import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import CommonButton from '../components/CommonButton';
import BackgroundTimer from 'react-native-background-timer';

const BackgroundTimerScreen = ({navigation}: any) => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    timerRef.current = BackgroundTimer.setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      BackgroundTimer.clearInterval(timerRef.current);
      timerRef.current = null;
      setCount(0);
      startTimer();
    }
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      clearTimer();
    };
  }, [startTimer, clearTimer]);

  const formattedCount = useMemo(() => {
    return `Count: ${count}`;
  }, [count]);

  return (
    <View>
      <Text
        style={{color: 'black'}}>{`BackgroundTimer: ${formattedCount}`}</Text>
      <CommonButton
        title={'Clear Timer'}
        disabled={false}
        onPress={() => clearTimer()}
      />
      <CommonButton
        title={'Go To TimeLineFlatListScreen'}
        disabled={false}
        onPress={() => navigation.navigate('TimeLineFlatListScreen')}
      />
    </View>
  );
};

export default BackgroundTimerScreen;
