import React, {useState, FC} from 'react';
import {Platform, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface CommonCheckBoxProps {
  isSelected: boolean;
  onValueChange: any;
  androidUnCheckBorderColor: string;
  androidCheckFillBoxColor: string;
  boxType: string;
}

const CommonCheckBox: FC<CommonCheckBoxProps> = ({
  isSelected,
  onValueChange,
  androidUnCheckBorderColor = 'black',
  androidCheckFillBoxColor = 'red',
  boxType = 'square',
}) => {
  return (
    <View>
      <CheckBox
        value={isSelected}
        onValueChange={onValueChange}
        // accessibilityLabel="Remember me"
        tintColors={{
          true: androidCheckFillBoxColor,
          false: androidUnCheckBorderColor,
        }}
        onTintColor={'red'}
        onCheckColor={'white'}
        boxType={boxType}
        onAnimationType="fill"
        onFillColor={'red'}
        transform={[{scaleX: 1.2}, {scaleY: 1.2}]}
        style={{}}
      />
    </View>
  );
};

export default CommonCheckBox;
