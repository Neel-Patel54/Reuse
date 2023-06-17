import React, {FC, useMemo, useCallback, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

// require steps for bottonsheet
// 1. yarn add react-native-reanimated react-native-gesture-handler
// import this => import 'react-native-gesture-handler'; and import {GestureHandlerRootView} from 'react-native-gesture-handler'; in App.tsx and wrap enite app component with GestureHandlerRootView

interface CommonSheetProps {
  closeBottonSheet: any;
}

const CommonBottomSheet: FC<CommonSheetProps> = ({closeBottonSheet}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // variables
  const snapPoints = useMemo(() => ['10%', '25%', '50%', '100%'], []);

  useEffect(() => {
    if (currentIndex < 0) {
      closeBottonSheet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  console.log({currentIndex});
  

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    setCurrentIndex(index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        // appearsOnIndex={0}
        enableTouchThrough
        opacity={0.1}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>
        BottomSheet (write screen content here)
      </Text>
      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text style={{color: 'black'}}>Awesome 🎉</Text>
        </View>
        <BottomSheetView>
          <Text style={{color: 'black'}}>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default CommonBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
