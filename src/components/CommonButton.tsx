import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  buttonContainerStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  disabled?: boolean;
  onPress: any;
  title: string;
}

const CommonButton: FC<ButtonProps> = ({
  buttonContainerStyle,
  buttonTextStyle,
  disabled = false,
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        buttonContainerStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0080ff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    minWidth: 120,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CommonButton;
