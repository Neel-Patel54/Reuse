import {View, Image} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import {useResponsiveImageView} from 'react-native-responsive-image-view';

const ResponsiveImageViewScreen = ({navigation}: any) => {
  const {getViewProps, getImageProps} = useResponsiveImageView({
    source: {uri: 'https://fakeimg.pl/350x200/?text=Hello'},
  });

  return (
    <View style={{flex: 1}}>
      <View
        {...getViewProps()}
        style={{height: 500, width: 400, borderWidth: 1}}>
        <Image {...getImageProps()} />
      </View>
      {/* <View style={{height: 500, width: 400, borderWidth: 1}}>
        <Image
          source={{uri: 'https://fakeimg.pl/350x200/?text=Hello'}}
          style={{height: 200, width: 350}}
        />
      </View> */}
      <CommonButton
        title={'Go To QrcodeScannerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('QrcodeScannerScreen')}
      />
    </View>
  );
};

export default ResponsiveImageViewScreen;
