import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonButton from '../components/CommonButton';
import NetInfo from '@react-native-community/netinfo';

const NetworkStatusScreen = ({navigation}) => {
  const [netState, setNetStatus] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const status = state.isConnected && state.isInternetReachable;
      setNetStatus(status);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>{`Is user online ${netState}`}</Text>

      <CommonButton
        title={'Go To BottomSheetScreen'}
        disabled={false}
        onPress={() => navigation.navigate('BottomSheetScreen')}
      />
    </View>
  );
};

export default NetworkStatusScreen;
