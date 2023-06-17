import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNImageManipulator from '@oguzhnatly/react-native-image-manipulator';
import CommonButton from '../components/CommonButton';

const ImagePicker = () => {
  const [cameraImage, setCameraImage] = useState({});
  const [libraryImage, setLibraryImage] = useState({});
  const [resize, setResize] = useState('');

  const handleImageFromCamera = async () => {
    const cameraOption: any = {
      mediaType: 'photo',
      quality: 1,
    };
    const result = await launchCamera(cameraOption);
    console.log({result});
    console.log(result?.assets[0]);

    setCameraImage(result?.assets[0]);
  };

  const handleImageFromImageLibrary = async () => {
    const imageLibraryOption: any = {
      mediaType: 'photo',
      quality: 1,
    };
    const result1 = await launchImageLibrary(imageLibraryOption);
    setLibraryImage(result1?.assets[0]);
  };

  const handleImageResize = async () => {
    const manipResult = await RNImageManipulator.manipulate(
      cameraImage?.uri,
      [{resize: {width: 300, height: 300}}],
      {format: 'png'},
    );
    setResize(manipResult?.uri);
    console.log({manipResult});
  };

  return (
    <View>
      <Text style={{color: 'black'}}>ImagePicker</Text>
      <Image
        source={{
          uri: cameraImage?.uri,
        }}
        style={{height: 200, width: 200}}
      />
      <Image
        source={{
          uri: libraryImage?.uri,
        }}
        style={{height: 200, width: 200}}
      />
      <CommonButton
        title={'ImageFromCamera'}
        disabled={false}
        onPress={handleImageFromCamera}
      />
      <CommonButton
        title={'ImageFromImageLibrary'}
        disabled={false}
        onPress={handleImageFromImageLibrary}
      />
      <CommonButton
        title={'ImageResize'}
        disabled={false}
        onPress={handleImageResize}
      />
      <Image
        source={{
          uri: resize,
        }}
        resizeMode="cover"
        style={{height: 500, width: 500, borderWidth: 2}}
      />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
