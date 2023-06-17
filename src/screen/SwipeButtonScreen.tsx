import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import CommonButton from '../components/CommonButton';
import SwipeButton from 'rn-swipe-button';
import PhoneInput from 'react-native-phone-number-input';

const SwipeButtonScreen = ({navigation}: any) => {
  const [swipeStatus, setSwipeStatus] = useState('swipe');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleSwipe = () => {
    setSwipeStatus('completed');
    // Do something when the swipe is completed
  };

  return (
    <View style={styles.container}>
      <SwipeButton
        // disabled={swipeStatus === 'completed'}
        title={swipeStatus === 'completed' ? 'Completed!' : 'Swipe to Continue'}
        titleColor={swipeStatus === 'completed' ? 'green' : 'red'}
        onSwipeSuccess={handleSwipe}
        railBackgroundColor="#ECECEC"
        thumbIconBackgroundColor="#FFFFFF"
        thumbIconComponent={() => <Text style={styles.thumbIcon}>hi</Text>}
        railStyles={{
          backgroundColor:
            swipeStatus === 'completed'
              ? 'rgba(0,248,0, 0.1)'
              : 'rgba(248,0,0, 0.1)',
          borderColor: 'transparent',
        }}
        // containerStyles={{marginBottom: 20}}
      />
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          {showMessage && (
            <View style={{marginBottom: 20}}>
              <Text style={{color: 'black'}}>Value : {value}</Text>
              <Text style={{color: 'black'}}>
                Formatted Value : {formattedValue}
              </Text>
              <Text style={{color: 'black'}}>
                Valid : {valid ? 'true' : 'false'}
              </Text>
            </View>
          )}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            // placeholder={'Number'}
            autoFocus={false}
            textInputStyle={{borderWidth: 0.6, color: 'black'}}
            containerStyle={{width: '100%', height: 80, marginBottom: 20}}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              backgroundColor: 'tomato',
            }}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}>
            <Text>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CommonButton
        title={'Go To QRGeneratorScreen'}
        disabled={false}
        onPress={() => navigation.navigate('QRGeneratorScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  thumbIcon: {
    fontSize: 20,
  },
});

export default SwipeButtonScreen;
