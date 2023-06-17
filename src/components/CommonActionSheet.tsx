import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

const CommonActionSheet = () => {
  const actionSheetRef = useRef<any>();

  const handleOpenActionSheet = () => {
    actionSheetRef?.current?.show();
  };

  const handleActionSheetSelection = (index: number) => {
    // Handle selected action
    // index 0 corresponds to the first option, index 1 to the second option, and so on
    switch (index) {
      case 0:
        // Option 1 selected
        console.log('Option 1 selected');
        break;
      case 1:
        // Option 2 selected
        console.log('Option 2 selected');
        break;
      case 2:
        // Option 3 selected
        console.log('Option 3 selected');
        break;
      // Add more cases for additional options if needed
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={handleOpenActionSheet}
        style={{
          width: 200,
          padding: 20,
          alignSelf: 'center',
          backgroundColor: 'pink',
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          Open Action Sheet
        </Text>
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        title={
          (
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Which one do you like?
            </Text>
          ) || 'Choose an option'
        }
        options={['Option 1', 'Option 2', 'Option 3', 'Cancel']}
        tintColor={'green'}
        cancelButtonIndex={3}
        destructiveButtonIndex={2}
        onPress={handleActionSheetSelection}
        styles={{
          titleBox: {height: 80, backgroundColor: 'tomato'},
          messageBox: {height: '50%'},
          buttonBox: {height: 80, backgroundColor: 'yellow'},
          cancelButtonBox: {height: 60, backgroundColor: 'pink'},
        }}
      />
    </View>
  );
};

export default CommonActionSheet;

// Its a default react-native-actionsheet package UI :
// import {StyleSheet} from 'react-native';
// export const hairlineWidth = StyleSheet.hairlineWidth;
// export default {
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     opacity: 0.4,
//     backgroundColor: '#000',
//   },
//   wrapper: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   body: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     backgroundColor: '#e5e5e5',
//   },
//   titleBox: {
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   titleText: {
//     color: '#757575',
//     fontSize: 14,
//   },
//   messageBox: {
//     height: 30,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   messageText: {
//     color: '#9a9a9a',
//     fontSize: 12,
//   },
//   buttonBox: {
//     height: 50,
//     marginTop: hairlineWidth,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   buttonText: {
//     fontSize: 18,
//   },
//   cancelButtonBox: {
//     height: 50,
//     marginTop: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
// };
