import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommonButton from '../components/CommonButton';
interface ButtonScreenProps {
  navigation: any;
}

const ButtonScreen: React.FC<ButtonScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CommonButton
        title={'Go To Accordion Screen'}
        disabled={false}
        onPress={() => navigation.navigate('CollapsibleAccordionScreen')}
      />
      <CommonButton
        title={'Accordion Screen'}
        buttonContainerStyle={styles.btnContainer}
        buttonTextStyle={styles.btnText}
        disabled={false}
        onPress={() => navigation.navigate('CollapsibleAccordionScreen')}
      />
    </View>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'yellow',
  },
  btnText: {
    color: 'blue',
    fontWeight: 'normal',
  },
});
