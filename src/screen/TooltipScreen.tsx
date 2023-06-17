import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';
import {Popover, usePopover} from 'react-native-modal-popover'; // for managing different state or ref insted create common component and just pass name and position direction of tootltip.

const TooltipScreen = ({navigation}) => {
  const touchableRef1 = React.useRef(null);

  const [button1Text, setButton1Text] = useState('');
  const [button2Text, setButton2Text] = useState('');
  const {
    openPopover,
    closePopover,
    popoverVisible,
    touchableRef,
    popoverAnchorRect,
  } = usePopover();

  return (
    <View style={styles.app}>
      <View style={styles.app}>
        <Button
          title="Press me!"
          ref={touchableRef}
          onPress={() => {
            setButton2Text('');
            setButton1Text('Tooltip for Button 1');
            openPopover();
          }}
        />
        <Button
          title="Press me12!"
          ref={touchableRef1}
          onPress={() => {
            setButton1Text('');
            setButton2Text('Tooltip for Button 2');
            openPopover();
          }}
        />
        <Popover
          contentStyle={styles.content}
          arrowStyle={styles.arrow}
          backgroundStyle={styles.background}
          visible={popoverVisible}
          onClose={closePopover}
          placement={'bottom'}
          fromRect={popoverAnchorRect}
          supportedOrientations={['portrait', 'landscape']}>
          <Text>{button1Text || button2Text}</Text>
        </Popover>
      </View>
      <CommonButton
        title={'Go To BluetoothScreen'}
        disabled={false}
        onPress={() => navigation.navigate('BluetoothScreen')}
      />
    </View>
  );
};

export default TooltipScreen;

const styles = StyleSheet.create({
  app: {
    // ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
  content: {
    padding: 16,
    backgroundColor: 'pink',
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: 'pink',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
});
