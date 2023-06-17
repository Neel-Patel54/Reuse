import {View, Image} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import PagerView from 'react-native-pager-view';

const PagerViewScreen = ({navigation}: any) => {
  const images = [
    'https://fakeimg.pl/350x200/ff0000,128/000,255',
    'https://fakeimg.pl/350x200/?text=Hello',
    'https://fakeimg.pl/350x200/?text=World&font=lobster',
    'https://fakeimg.pl/350x200/ff0000/000',
  ];

  return (
    <View style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0}>
        {images.map((image, index) => (
          <View key={index} style={{flex: 1}}>
            <Image
              source={{uri: image}}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
        ))}
      </PagerView>
      <CommonButton
        title={'Go To ResponsiveImageViewScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ResponsiveImageViewScreen')}
      />
    </View>
  );
};

export default PagerViewScreen;
