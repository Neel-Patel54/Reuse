import {View} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import TextTicker from 'react-native-text-ticker';

const TextTickerScreen = ({navigation}: any) => {
  return (
    <View>
      <TextTicker
        style={{fontSize: 24, color: 'black'}}
        duration={14000}
        scrollSpeed={20000}
        loop
        // bounceDelay={0}
        // bounce
        repeatSpacer={200}
        marqueeDelay={0}>
        Super long piece of text is long. The quick brown fox jumps over the
        lazy dog.
      </TextTicker>
      <CommonButton
        title={'Go To BackgroundTimerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('BackgroundTimerScreen')}
      />
    </View>
  );
};

export default TextTickerScreen;
