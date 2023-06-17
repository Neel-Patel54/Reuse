import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CommonBottomSheet from '../components/CommonBottomSheet';
import CommonButton from '../components/CommonButton';

const BottomSheetScreen = ({navigation}: any) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  return (
    <View style={{flex: 1}}>
      {!isSheetOpen && (
        <>
          <Text style={{color: 'black'}}>BottomSheetScreen 1</Text>
          <Text style={{color: 'black'}}>BottomSheetScreen 2</Text>
          <Text style={{color: 'black'}}>BottomSheetScreen 3</Text>
          <Text style={{color: 'black'}}>BottomSheetScreen 4</Text>
        </>
      )}
      {!isSheetOpen && (
        <TouchableOpacity
          onPress={() => setIsSheetOpen(true)}
          style={{
            width: 200,
            padding: 10,
            alignSelf: 'center',
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Open Sheet</Text>
        </TouchableOpacity>
      )}
      {isSheetOpen && <CommonBottomSheet closeBottonSheet={handleSheetClose} />}
      <CommonButton
        title={'Go To ActionSheetScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ActionSheetScreen')}
      />
    </View>
  );
};

export default BottomSheetScreen;
