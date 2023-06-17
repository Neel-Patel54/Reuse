import {View, Text} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import SwitchSelector from 'react-native-switch-selector';

const SwitchSelectorScreen = ({navigation}: any) => {
  const options = [
    {
      label: '01:00',
      value: '1',
      testID: 'switch-one',
      accessibilityLabel: 'switch-one',
    },
    {
      label: '01:30',
      value: '1.5',
      testID: 'switch-one-thirty',
      accessibilityLabel: 'switch-one-thirty',
    },
    {
      label: '02:00',
      value: '2',
      testID: 'switch-two',
      accessibilityLabel: 'switch-two',
    },
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={value => console.log(`Call onPress with value: ${value}`)}
      />
      <CommonButton
        title={'Go To PhotoEditorScreen'}
        disabled={false}
        onPress={() => navigation.navigate('PhotoEditorScreen')}
      />
    </View>
  );
};

export default SwitchSelectorScreen;
