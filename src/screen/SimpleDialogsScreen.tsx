import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import {ConfirmDialog, ProgressDialog} from 'react-native-simple-dialogs';

const SimpleDialogsScreen = ({navigation}: any) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  return (
    <View>
      <ConfirmDialog
        title="Confirm Dialog"
        message="Are you sure about that?"
        visible={dialogVisible}
        onTouchOutside={() => setDialogVisible(false)}
        positiveButton={{
          title: 'YES',
          onPress: () => Alert.alert('Yes touched!'),
        }}
        negativeButton={{
          title: 'NO',
          onPress: () => Alert.alert('No touched!'),
        }}
      />
      <ProgressDialog
        visible={progressVisible}
        title="Progress Dialog"
        message="Please, wait..."
        onTouchOutside={() => setProgressVisible(false)}
      />
      <CommonButton
        title={'ConfirmDialog'}
        disabled={false}
        onPress={() => setDialogVisible(true)}
      />
      <CommonButton
        title={'ProgressDialog'}
        disabled={false}
        onPress={() => setProgressVisible(true)}
      />
      <CommonButton
        title={'Go To ReanimatedCarouselScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ReanimatedCarouselScreen')}
      />
    </View>
  );
};

export default SimpleDialogsScreen;
