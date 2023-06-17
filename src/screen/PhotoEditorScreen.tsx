import {View} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import PhotoEditor from 'react-native-photo-editor';
import {launchImageLibrary} from 'react-native-image-picker';

const PhotoEditorScreen = ({navigation}: any) => {
  const [libraryImage, setLibraryImage] = useState({});

  const handleImageFromImageLibrary = async () => {
    const imageLibraryOption: any = {
      mediaType: 'photo',
      quality: 1,
    };
    const result1 = await launchImageLibrary(imageLibraryOption);
    setLibraryImage(result1?.assets[0]);
  };

  const handleEditPhoto = () => {
    // Open the photo editor
    PhotoEditor.Edit({
      path: 'https://raw.githubusercontent.com/prscX/react-native-photo-editor/master/Example/assets/photo.jpg', // Replace with the actual path to your image file
      stickers: [
        'https://raw.githubusercontent.com/prscX/react-native-photo-editor/master/Example/assets/photo.jpg', // Replace with the actual path to your sticker image file
        'https://raw.githubusercontent.com/prscX/react-native-photo-editor/master/Example/assets/photo.jpg',
        // Add more stickers as needed
      ],
      onSave: (editedImage: any) => {
        // Handle the edited image here
        console.log('Edited image path:', editedImage);
      },
      onCancel: () => {
        // Handle the cancellation
        console.log('Photo editing cancelled');
      },
    });
  };

  return (
    <View>
      <CommonButton
        title={'ImageFromImageLibrary'}
        disabled={false}
        onPress={handleImageFromImageLibrary}
      />
      <CommonButton
        title={'handleEditPhoto'}
        disabled={false}
        onPress={() => handleEditPhoto()}
      />
      <CommonButton
        title={'Go To TextTickerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('TextTickerScreen')}
      />
    </View>
  );
};

export default PhotoEditorScreen;
