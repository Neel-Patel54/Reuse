import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import CommonButton from '../components/CommonButton';

const CameraRollScreen = ({navigation}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    hasAndroidPermission();
  }, []);

  const hasAndroidPermission = async () => {
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      fetchPhotos();
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  //   const savePicture = async () => {
  //     if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
  //       return;
  //     }
  //     CameraRoll.save(tag, {type, album});
  //   };

  const fetchPhotos = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({first: 4});
      const photosArray: any = edges.map(({node}) => node.image.uri);
      setPhotos(photosArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black', fontSize: 26}}>CameraRollScreen</Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            flexWrap: 'wrap',
          }}>
          {photos.map((photoUri, index) => (
            <Image
              key={index}
              source={{uri: photoUri}}
              style={{width: '50%', height: 200}}
            />
          ))}
        </View>
      </ScrollView>
      <CommonButton
        title={'Go To CountdownCircleTimerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('CountdownCircleTimerScreen')}
      />
    </View>
  );
};

export default CameraRollScreen;
