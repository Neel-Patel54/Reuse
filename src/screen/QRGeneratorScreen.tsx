import {View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import RNQRGenerator from 'rn-qr-generator';
import Svg, {Circle, Path, Rect, SvgUri} from 'react-native-svg';

const QRGeneratorScreen = ({navigation}: any) => {
  const [imgUrl, setImgUrl] = useState('');
  const handleQrGenerateQr = () => {
    RNQRGenerator.generate({
      value: 'https://github.com/gevgasparyan/rn-qr-generator',
      height: 100,
      width: 100,
      correctionLevel: 'H',
    })
      .then(response => {
        const {uri, width, height, base64} = response;
        setImgUrl(uri);
        console.log({width, height, base64});
      })
      .catch(error => console.log('Cannot create QR code', error));
  };

  return (
    <View style={{flex: 1}}>
      <CommonButton
        title={'Generat QR CODE'}
        disabled={false}
        onPress={() => handleQrGenerateQr()}
      />
      {imgUrl && (
        <Image source={{uri: imgUrl || ''}} style={{height: 200, width: 200}} />
      )}
      <View
        style={{borderWidth: 1, height: 300, width: 300, alignSelf: 'center'}}>
        <SvgUri
          width="100%"
          height="100%"
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/aa.svg"
        />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
          borderWidth: 1,
        }}>
        <Svg height="100" width="100">
          <Rect x="0" y="0" width="100" height="100" fill="black" />
          <Circle cx="50" cy="50" r="30" fill="yellow" />
          <Circle cx="40" cy="40" r="4" fill="black" />
          <Circle cx="60" cy="40" r="4" fill="black" />
          <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
        </Svg>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
        <Svg
          width="130"
          height="130"
          fill="blue"
          stroke="red"
          color="green"
          viewBox="-16 -16 544 544">
          <Path
            d="M318.37,85.45L422.53,190.11,158.89,455,54.79,350.38ZM501.56,60.2L455.11,13.53a45.93,45.93,0,0,0-65.11,0L345.51,58.24,449.66,162.9l51.9-52.15A35.8,35.8,0,0,0,501.56,60.2ZM0.29,497.49a11.88,11.88,0,0,0,14.34,14.17l116.06-28.28L26.59,378.72Z"
            strokeWidth="32"
          />
          <Path d="M0,0L512,512" stroke="currentColor" strokeWidth="32" />
        </Svg>
      </ScrollView>
      <CommonButton
        title={'Go To ZoomImageScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ZoomImageScreen')}
      />
    </View>
  );
};

export default QRGeneratorScreen;
