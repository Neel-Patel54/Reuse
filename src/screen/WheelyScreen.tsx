import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import WheelPicker from 'react-native-wheely';

const WheelyScreen = ({navigation}: any) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <View style={{flex: 1}}>
      <WheelPicker
        selectedIndex={selectedIndex}
        options={['Berlin', 'London', 'Amsterdam']}
        onChange={index => setSelectedIndex(index)}
        selectedIndicatorStyle={{
          backgroundColor: 'tomato',
          color: 'white',
        }}
        containerStyle={{
          backgroundColor: '#c1bfbf',
          width: '30%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
        itemTextStyle={{color: 'black'}}
      />
      <CommonButton
        title={'Go To ClipboardScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ClipboardScreen')}
      />
    </View>
  );
};

export default WheelyScreen;
