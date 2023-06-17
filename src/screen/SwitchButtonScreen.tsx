import {View} from 'react-native';
import React, {useState} from 'react';
import CommonSwitch from '../components/CommonSwitch';
import CommonButton from '../components/CommonButton';

const SwitchButtonScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <CommonSwitch
        trackDisableBackground={'gray'}
        trackEnableBackground={'blue'}
        thumbDisableBackground={'red'}
        thumbEnableBackground={'black'}
        isEnabled={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
        iosBackgroundColor={'#3e3e3e'}
      />
      <CommonButton
        title={'Go To RefreshControlScreen'}
        disabled={false}
        onPress={() => navigation.navigate('RefreshControlScreen')}
      />
    </View>
  );
};

export default SwitchButtonScreen;
