import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import CommonButton from '../components/CommonButton';

const images = [
  {
    url: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
    props: {
      // Optional props for the image component
    },
  },
  {
    url: 'https://fakeimg.pl/350x200/?text=Hello',
    props: {
      // Optional props for the image component
    },
  },
  // Add more images as needed
];

const ZoomImageScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const showImageViewer = () => {
    setIsVisible(true);
  };

  const closeImageViewer = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showImageViewer}>
        <Text style={{color: 'black'}}>Open Image Viewer</Text>
      </TouchableOpacity>
      <Modal visible={isVisible} onRequestClose={closeImageViewer}>
        <ImageViewer
          imageUrls={images}
          index={0} // Starting index of the image to be displayed
          onCancel={closeImageViewer}
          enableSwipeDown
          onSwipeDown={closeImageViewer}
          useNativeDriver
        />
      </Modal>
      <CommonButton
        title={'Go To WheelyScreen'}
        disabled={false}
        onPress={() => navigation.navigate('WheelyScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ZoomImageScreen;
