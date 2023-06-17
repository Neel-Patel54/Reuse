import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import CommonButton from '../components/CommonButton';

const ScreenShot = ({navigation}) => {
  const ScreenShotRef = useRef<any>(null);
  const [image, setImage] = useState('');

  const handleScreenShot = () => {
    ScreenShotRef?.current?.capture().then((uri: any) => {
      console.log('do something with ', uri);
      setImage(uri);
    });
  };

  const handleScreenShare = () => {
    const options = {
      url: image,
      message: 'Tree shot',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ViewShot
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        ref={ScreenShotRef}
        options={{fileName: 'Tree', format: 'jpg', quality: 0.9}}>
        <Image
          source={require('../assets/tree.png')}
          resizeMode="contain"
          style={{width: 380, height: 400}}
        />
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Hello</Text>
        </View>
        <Pressable
          onPress={() => handleScreenShot()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'tomato',
            height: 48,
            padding: 10,
            width: 200,
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>Screen Shot</Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => handleScreenShare()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'tomato',
            height: 48,
            padding: 10,
            width: 200,
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>Share</Text>
        </TouchableOpacity>
      </ViewShot>
      <CommonButton
        title={'Go To NeonScreen'}
        disabled={false}
        onPress={() => navigation.navigate('NeonScreen')}
      />
    </View>
  );
};

export default ScreenShot;
