import {View} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import Clipboard from '@react-native-clipboard/clipboard';
import {API_URL} from '@env';

const ClipboardScreen = ({navigation}: any) => {
  const [copiedText, setCopiedText] = useState('');
  console.log({API_URL});

  const copyToClipboard = () => {
    Clipboard.setString('hello world1111');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  console.log({copiedText});

  return (
    <View style={{flex: 1}}>
      <CommonButton
        title={'Copy text'}
        disabled={false}
        onPress={() => copyToClipboard()}
      />
      <CommonButton
        title={'Fetch copy text'}
        disabled={false}
        onPress={() => fetchCopiedText()}
      />
      <CommonButton
        title={'Go To ClipboardScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ClipboardScreen')}
      />
    </View>
  );
};

export default ClipboardScreen;
