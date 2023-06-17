import {View} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import CommonCheckBox from '../components/CommonCheckBox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CheckBoxScreen = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CommonCheckBox
        isSelected={isChecked}
        onValueChange={(e: any) => setIsChecked(e)}
        androidUnCheckBorderColor={'pink'}
        androidCheckFillBoxColor={'orange'}
        boxType={'square'}
      />
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox"
        isChecked={true}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          console.log({isChecked});
        }}
        // textStyle={{
        //   textDecorationLine: 'none',
        // }}
        // innerIconStyle={{
        //   borderRadius: 0, // to make it a little round increase the value accordingly
        // }}
      />
      <CommonButton
        title={'Go To ShimmerLoadingScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ShimmerLoadingScreen')}
      />
    </View>
  );
};

export default CheckBoxScreen;
