import {View, Text, Alert, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import CommonButton from '../components/CommonButton';

// add this in manifest
/* <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> */


const CurrentGeolocationScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    checkLocationPermission();
    // Get current location continue then use this***********
    return () => {
      stopWatchingLocation();
    };
  }, []);

  const checkLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'ios') {
        permission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else {
        permission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }

      if (permission === 'granted') {
        //  if we get current location only one time:----------
        //   getCurrentLocation();

        // Get current location continue then use this***********
        startWatchingLocation();
      } else if (permission === 'denied') {
        requestLocationPermission();
      } else if (permission === 'blocked') {
        showPermissionBlockedAlert();
      }
    } catch (error) {
      console.log('Error checking location permission:', error);
    }
  };

  const requestLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'ios') {
        permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else {
        permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }

      if (permission === 'granted') {
        //  if we get current location only one time:----------
        // getCurrentLocation();

        // Get current location continue then use this***********
        startWatchingLocation();
      } else if (permission === 'denied') {
        requestLocationPermission(); // Recursive call to handle denied permission
      } else if (permission === 'blocked') {
        showPermissionBlockedAlert();
      }
    } catch (error) {
      console.log('Error requesting location permission:', error);
    }
  };

  const showPermissionBlockedAlert = () => {
    Alert.alert(
      'Location Permission Blocked',
      'Please enable location permission in the app settings to use this feature.',
      [{text: 'OK'}],
    );
  };

  //  if we get current location only one time:----------
  //   const getCurrentLocation = () => {
  //     Geolocation.getCurrentPosition(
  //       position => {
  //         setLocation(position?.coords);
  //       },
  //       error => {
  //         console.log('Error getting location:', error);
  //       },
  //       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //     );
  //   };

  // Get current location continue then use this***********
  const startWatchingLocation = () => {
    Geolocation.watchPosition(
      position => {
        setLocation(position?.coords);
      },
      error => {
        console.log('Error watching location:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 1,
      },
    );
  };

  // Get current location continue then use this***********
  const stopWatchingLocation = () => {
    Geolocation.stopObserving();
  };

  console.log({location});
  return (
    <View>
      <Text style={{color: 'black'}}>CurrentGeolocationScreen</Text>
      <Text style={{color: 'black'}}>latitude:- {location?.latitude}</Text>
      <Text style={{color: 'black'}}>longitude:- {location?.longitude}</Text>
      <CommonButton
        title={'Go To ImagePickerScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ImagePickerScreen')}
      />
    </View>
  );
};

export default CurrentGeolocationScreen;
