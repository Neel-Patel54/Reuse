import React from 'react';
import {View} from 'react-native';
import Signature from 'react-native-signature-canvas';
import CommonButton from '../components/CommonButton';

const SignatureCanvasScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Signature
        // handle when you click save button
        onOK={img => console.log(img)}
        onEmpty={() => console.log('empty')}
        // description text for signature
        descriptionText="Sign"
        // clear button text
        clearText="Clear"
        // save button text
        confirmText="Save"
        // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
        webStyle={`.m-signature-pad--footer
        .button {
        background-color: red;
        color: #FFF;
        }`}
        autoClear={true}
        imageType={'image/svg+xml'}
      />
      <CommonButton
        title={'Go To EmojiAndColorPicker'}
        disabled={false}
        onPress={() => navigation.navigate('EmojiAndColorPicker')}
      />
    </View>
  );
};

export default SignatureCanvasScreen;
