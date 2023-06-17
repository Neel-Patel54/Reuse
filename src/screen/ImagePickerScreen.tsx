import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ImagePicker from '../components/ImagePicker';
import CommonButton from '../components/CommonButton';
// Implement @oguzhnatly/react-native-image-manipulator and react-native-image-picker

const ImagePickerScreen = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <ImagePicker />
      </ScrollView>
      <CommonButton
        title={'Go to Document screen'}
        disabled={false}
        onPress={() => navigation.navigate('DocumentScreen')}
      />
    </>
  );
};

export default ImagePickerScreen;

const styles = StyleSheet.create({});
