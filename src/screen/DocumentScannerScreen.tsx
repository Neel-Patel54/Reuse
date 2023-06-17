import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentScanner from 'react-native-document-scanner-plugin';
import CommonButton from '../components/CommonButton';

const DocumentScannerScreen = ({navigation}) => {
  const [scannedImage, setScannedImage] = useState('');

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image
        resizeMode="contain"
        style={{flex: 1}}
        source={{uri: scannedImage}}
      />
      <CommonButton
        title={'Go To ReanimatedAnimation'}
        disabled={false}
        onPress={() => navigation.navigate('ReanimatedAnimation')}
      />
    </View>
  );
};

export default DocumentScannerScreen;
