import {View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import CommonButton from '../components/CommonButton';

const VideoScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Video
        source={{
          uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode="contain"
      />
      <CommonButton
        title={'Go To DeviceInfoScreen'}
        disabled={false}
        onPress={() => navigation.navigate('DeviceInfoScreen')}
      />
    </View>
  );
};

export default VideoScreen;
