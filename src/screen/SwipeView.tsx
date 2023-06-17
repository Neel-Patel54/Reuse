// import {View, Text} from 'react-native';
// import React, {useState} from 'react';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// const SwipeView = () => {
//   const [myText, setMyText] = useState('');
//   const [gestureName, setGestureName] = useState('');
//   const [backgroundColor, setBackgroundColor] = useState('');

//   const onSwipeUp = gestureState => {
//     setMyText('You swiped up!');
//   };

//   const onSwipeDown = gestureState => {
//     setMyText('You swiped down!');
//   };

//   const onSwipeLeft = gestureState => {
//     setMyText('You swiped left!');
//   };

//   const onSwipeRight = gestureState => {
//     setMyText('You swiped right!');
//   };

//   const onSwipe = (gestureName, gestureState) => {
//     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
//     setGestureName(gestureName);
//     switch (gestureName) {
//       case SWIPE_UP:
//         setBackgroundColor('red');
//         break;
//       case SWIPE_DOWN:
//         setBackgroundColor('green');
//         break;
//       case SWIPE_LEFT:
//         setBackgroundColor('blue');
//         break;
//       case SWIPE_RIGHT:
//         setBackgroundColor('yellow');
//         break;
//     }
//   };

//   const config = {
//     velocityThreshold: 0.3,
//     directionalOffsetThreshold: 80,
//   };

//   return (
//     <GestureRecognizer
//       onSwipe={(direction, state) => onSwipe(direction, state)}
//       onSwipeUp={state => onSwipeUp(state)}
//       onSwipeDown={state => onSwipeDown(state)}
//       onSwipeLeft={state => onSwipeLeft(state)}
//       onSwipeRight={state => onSwipeRight(state)}
//       config={config}
//       style={{
//         flex: 1,
//         backgroundColor: backgroundColor,
//       }}>
//       <Text style={{color: 'white', backgroundColor: 'tomato'}}>{myText}</Text>
//       <Text style={{color: 'white', backgroundColor: 'tomato', height: 50}}>
//         onSwipe callback received gesture: {gestureName}
//       </Text>
//     </GestureRecognizer>
//   );
// };

// export default SwipeView;

// ======************************************===============
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   Pressable,
// } from 'react-native';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

// const data = [
//   {id: 1, title: 'Item 1'},
//   {id: 2, title: 'Item 2'},
//   {id: 3, title: 'Item 3'},
// ];

// const ListItem = ({item, onDelete}) => {
//   const handleEdit = () => {
//     Alert.alert('Edit', `Edit item ${item.id}`);
//   };

//   const handleDelete = () => {
//     onDelete(item.id);
//     Alert.alert('Delete', `Delete item ${item.id}`);
//   };

//   const handleClick = () => {
//     Alert.alert('Click', `Clicked item ${item.id}`);
//   };

//   const renderRightActions = () => {
//     return (
//       <View style={styles.rightActions}>
//         <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
//           <Text style={styles.actionText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderLeftActions = () => {
//     return (
//       <View style={styles.leftActions}>
//         <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
//           <Text style={styles.actionText}>Edit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <Swipeable
//       // friction={2}
//       onSwipeableOpen={(data, list) => {
//         console.log('onSwipeableOpen', data, list);
//       }}
//       onSwipeableWillOpen={() => {
//         console.log('onSwipeableWillOpen');
//       }}
//       onActivated={() => {
//         console.log('onActivated');
//       }}
//       containerStyle={{backgroundColor: 'yellow'}}
//       renderRightActions={renderRightActions}
//       renderLeftActions={renderLeftActions}>
//       <Pressable style={styles.listItem} onPress={handleClick}>
//         {/* <View style={styles.listItem}> */}
//         <Text style={{color: 'black'}}>{item.title}</Text>
//         {/* </View> */}
//       </Pressable>
//     </Swipeable>
//   );
// };

// const App = () => {
//   const [listData, setListData] = useState(data);

//   const handleDeleteItem = itemId => {
//     setListData(prevData => prevData.filter(item => item.id !== itemId));
//   };

//   const renderItem = ({item}) => {
//     return <ListItem item={item} onDelete={handleDeleteItem} />;
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       <FlatList
//         data={listData}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.container}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//   },
//   listItem: {
//     height: 50,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//     backgroundColor: 'yellow',
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#ccc',
//   },
//   rightActions: {
//     width: 100,
//     height: 50,
//     backgroundColor: '#ff0000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   leftActions: {
//     width: 100,
//     height: 50,
//     backgroundColor: '#ffd700',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   actionButton: {
//     paddingHorizontal: 16,
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   actionText: {
//     color: 'white',
//   },
// });

// export default App;

// ************************************************************************
import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SwipeListItem from '../components/SwipeListItem';
import CommonButton from '../components/CommonButton';

const data = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
  {id: 3, title: 'Item 3'},
];

const App = ({navigation}) => {
  const [listData, setListData] = useState(data);
  const [openItemId, setOpenItemId] = useState(null);

  const handleDeleteItem = (itemId: any) => {
    setListData(prevData => prevData.filter(item => item.id !== itemId));
    if (openItemId === itemId) {
      setOpenItemId(null);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <SwipeListItem
        item={item}
        onDelete={handleDeleteItem}
        openItemId={openItemId}
        setOpenItemId={setOpenItemId}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
      />
      <CommonButton
        title={'Go To PhoneNumberModal'}
        disabled={false}
        onPress={() => navigation.navigate('PhoneNumberModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
  },
});

export default App;
