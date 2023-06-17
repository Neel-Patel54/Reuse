import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import CommonButton from '../components/CommonButton';

const DraggableFlatlist = ({navigation}: any) => {
  const items = [
    {id: 1, number: 1, color: 'red'},
    {id: 2, number: 2, color: 'pink'},
    {id: 3, number: 3, color: 'green'},
    {id: 4, number: 4, color: 'yellow'},
    {id: 5, number: 5, color: 'orange'},
    {id: 6, number: 6, color: 'black'},
    {id: 7, number: 7, color: 'cyan'},
    {id: 8, number: 8, color: 'gray'},
    {id: 9, number: 9, color: 'tomato'},
    {id: 10, number: 10, color: 'blue'},
  ];

  const initialData = useMemo(
    () =>
      items.map(item => ({
        key: `item-${item.id}`,
        label: String(item.number),
        backgroundColor: item.color,
      })),
    [],
  );

  const [data, setData] = useState(initialData);

  const renderItem = useCallback(({item, drag, isActive}: any) => {
    return (
      <Pressable
        onLongPress={drag}
        style={[
          styles.rowItem,
          {backgroundColor: isActive ? 'red' : item.backgroundColor},
        ]}>
        <Text style={styles.text}>{item.label}</Text>
      </Pressable>
    );
  }, []);

  const onDragEnd = useCallback(({data}: any) => {
    setData(data);
  }, []);

  return (
    <View style={{flex: 1}}>
      <CommonButton
        title={'Go To ReadMoreText'}
        disabled={false}
        onPress={() => navigation.navigate('ReadMoreText')}
      />
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        onDragEnd={onDragEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DraggableFlatlist;

// import {View, Text, StyleSheet, Pressable} from 'react-native';
// import React, {useState} from 'react';
// import CommonButton from '../components/CommonButton';
// import {
//   NestableScrollContainer,
//   NestableDraggableFlatList,
//   ScaleDecorator,
// } from 'react-native-draggable-flatlist';

// const DraggableFlatlist = ({navigation}: any) => {
//   const NUM_ITEMS = 10;
//   function getColor(i: number) {
//     const multiplier = 255 / (NUM_ITEMS - 1);
//     const colorVal = i * multiplier;
//     return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
//   }

//   const initialData: any = [...Array(NUM_ITEMS)].map((d, index) => {
//     const backgroundColor = getColor(index);
//     return {
//       key: `item-${index}`,
//       label: String(index) + '',
//       height: 100,
//       width: 60 + Math.random() * 40,
//       backgroundColor,
//     };
//   });

//   const [data1, setData1] = useState(initialData);

//   const renderItem = ({item, drag, isActive}: any) => {
//     return (
//       <ScaleDecorator>
//         <Pressable
//           onLongPress={drag}
//         //   onLongPress={drag}
//           disabled={isActive}
//           style={[
//             styles.rowItem,
//             {backgroundColor: isActive ? 'red' : item.backgroundColor},
//           ]}>
//           <Text style={styles.text}>{item.label}</Text>
//         </Pressable>
//       </ScaleDecorator>
//     );
//   };
//   return (
//     <View style={{flex: 1}}>
//       <NestableScrollContainer>
//         <NestableDraggableFlatList
//           data={data1}
//           renderItem={renderItem}
//           keyExtractor={(item: any) => item.key}
//           onDragEnd={({data}) => setData1(data)}
//         />
//       </NestableScrollContainer>
//       <CommonButton
//         title={'Go To DraggableFlatlist'}
//         disabled={false}
//         onPress={() => navigation.navigate('DraggableFlatlist')}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   rowItem: {
//     height: 100,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
// export default DraggableFlatlist;

// ****************************************************************************

// import React, {useState} from 'react';
// import {View, Text, Pressable, StyleSheet} from 'react-native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// const DraggableFlatlist = ({navigation}) => {
//   const NUM_ITEMS = 10;

//   const initialData = Array.from({length: NUM_ITEMS}, (d, index) => ({
//     key: `item-${index}`,
//     label: String(index),
//     backgroundColor: `rgb(${index * (255 / (NUM_ITEMS - 1))}, ${Math.abs(
//       128 - index * (255 / (NUM_ITEMS - 1)),
//     )}, ${255 - index * (255 / (NUM_ITEMS - 1))})`,
//   }));

//   const [data, setData] = useState(initialData);

//   const renderItem = ({item, drag, isActive}) => {
//     return (
//       <Pressable
//         onLongPress={drag}
//         style={[
//           styles.rowItem,
//           {backgroundColor: isActive ? 'red' : item.backgroundColor},
//         ]}>
//         <Text style={styles.text}>{item.label}</Text>
//       </Pressable>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <DraggableFlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.key}
//         onDragEnd={({data}) => setData(data)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rowItem: {
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default DraggableFlatlist;

// ========================================================================
