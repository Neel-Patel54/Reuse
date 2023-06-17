import {View, Modal, Text} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import EmojiPicker from 'rn-emoji-keyboard'; //npm install react-native-svg reqire for this emoji package
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';

const EmojiAndColorPicker = ({navigation}: any) => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [showModal, setShowModal] = useState(false);
  const [txt, setTxt] = useState('');

  const handlePick = (data: any) => {
    console.log({data});
    setTxt(data?.emoji);
  };

  const onSelectColor = ({hex}: any) => {
    // do something with the selected color.
    console.log({hex});
  };

  return (
    <View style={{flex: 1}}>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <CommonButton
        title={'Open emoji box'}
        disabled={false}
        onPress={() => setIsOpen(true)}
      />
      <Text>{txt}</Text>
      <CommonButton title="Color Picker" onPress={() => setShowModal(true)} />
      <Modal visible={showModal} animationType="slide">
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ColorPicker
            style={{width: '70%'}}
            value="red"
            onComplete={onSelectColor}>
            <Preview />
            <Panel1 />
            <HueSlider />
            <OpacitySlider />
            <Swatches />
          </ColorPicker>
          <CommonButton title="Ok" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
      <CommonButton
        title={'Go To ConfirmationInput'}
        disabled={false}
        onPress={() => navigation.navigate('ConfirmationInput')}
      />
    </View>
  );
};

export default EmojiAndColorPicker;
