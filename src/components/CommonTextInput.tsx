import React, {FC} from 'react';
import {StyleSheet, TextInput, ViewStyle, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface CommonTextInputProps {
  commonHeight?: string;
  iconColor?: string;
  iconName: string;
  iconSize?: number;
  iconContainerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputIconContainerStyle?: ViewStyle;
  isIcon?: boolean;
  keyboardType?: any;
  onBlur?: any;
  onChangeText: any;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  value: string;
}

const CommonTextInput: FC<CommonTextInputProps> = ({
  commonHeight = 45,
  iconColor,
  iconName,
  iconSize = 26,
  iconContainerStyle,
  iconStyle,
  inputContainerStyle,
  inputIconContainerStyle,
  isIcon = false,
  keyboardType,
  onBlur,
  onChangeText,
  placeholder,
  placeholderTextColor = 'black',
  secureTextEntry = false,
  value,
}) => {
  return isIcon ? (
    <View style={[inputIconContainerStyle, {height: commonHeight}]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || 'black'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, inputContainerStyle, {height: commonHeight}]}
      />
      <View
        style={[
          styles.iconContainer,
          iconContainerStyle,
          {height: commonHeight},
        ]}>
        <MaterialIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={iconStyle}
        />
      </View>
    </View>
  ) : (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || 'black'}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, inputContainerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommonTextInput;

// For vector-icons
// 1. npm i react-native-vector-icons

// Android:
// 2. Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

// => At Top
// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

// => Then line 56
// project.ext.vectoricons = [
//     iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
// ]

// => Use
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

{
  /* <MaterialIcons name={'home'} size={26} color={'red'} />; */
}

// 3. remove typescrip error
// npm i --save-dev @types/react-native-vector-icons
