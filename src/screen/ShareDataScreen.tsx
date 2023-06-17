import {View, Text} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import Share from 'react-native-share';

const ShareDataScreen = ({navigation}) => {
  const handleShare = (options: any) => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View>
      <CommonButton
        title={'Share here'}
        disabled={false}
        onPress={() =>
          handleShare({
            message: 'This is the first share from react-native project.',
          })
        }
      />
      <CommonButton
        title={'Go To TooltipScreen'}
        disabled={false}
        onPress={() => navigation.navigate('TooltipScreen')}
      />
    </View>
  );
};

export default ShareDataScreen;
