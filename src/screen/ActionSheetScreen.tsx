import React, {FC} from 'react';
import {View} from 'react-native';
import CommonActionSheet from '../components/CommonActionSheet';
import CommonButton from '../components/CommonButton';
// import {fontFamily} from '../styles/fonts';

interface ActionSheetScreenProps {
  navigation: any;
}

const ActionSheetScreen: FC<ActionSheetScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* <Text style={{color: 'black', fontFamily: fontFamily.bold}}>
        Many different kinds of people use React Native: from advanced iOS
        developers to React beginners, to people getting started programming for
        the first time in their career. These docs were written for all
        learners, no matter their experience level or background.
      </Text>
      <Text style={{color: 'black', fontFamily: fontFamily.bold}}>
        ActionSheetScreen
      </Text>
      <Text style={{color: 'black', fontFamily: fontFamily.medium}}>
        ActionSheetScreen
      </Text>
      <Text style={{color: 'black', fontFamily: fontFamily.regular}}>
        ActionSheetScreen
      </Text>
      <Text style={{color: 'black', fontFamily: fontFamily.semiBold}}>
        ActionSheetScreen
      </Text> */}
      <CommonActionSheet />
      <CommonButton
        title={'Go To CurrentGeolocationScreen'}
        disabled={false}
        onPress={() => navigation.navigate('CurrentGeolocationScreen')}
      />
    </View>
  );
};

export default ActionSheetScreen;
