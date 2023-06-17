import {View, Text} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import ReadMore from 'react-native-read-more-text';

const ReadMoreText = ({navigation}: any) => {
  const renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: 'red'}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: 'blue'}} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  const handleTextReady = () => {
    console.log('Text is rendered completely');
  };

  return (
    <View style={{padding: 10}}>
      <ReadMore
        numberOfLines={3}
        ellipsizeMode="clip"
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
        onReady={handleTextReady}>
        <Text style={{color: 'black'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          mauris leo. Sed dignissim suscipit elit ac eleifend. Phasellus
          tincidunt nulla et erat luctus, at scelerisque ex malesuada. Donec
          facilisis ligula in mauris consectetur consectetur. Morbi vitae nulla
          sit amet nunc condimentum faucibus nec sit amet ligula. Curabitur
          auctor, leo et congue rutrum, nisi orci porttitor mi, eget consectetur
          lacus metus et ligula.
        </Text>
      </ReadMore>
      <CommonButton
        title={'Go To SwitchSelectorScreen'}
        disabled={false}
        onPress={() => navigation.navigate('SwitchSelectorScreen')}
      />
    </View>
  );
};

export default ReadMoreText;
