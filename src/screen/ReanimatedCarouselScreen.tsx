import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
// import { interpolate } from 'react-native-reanimated';
import CommonButton from '../components/CommonButton';

const ReanimatedCarouselScreen = ({navigation}) => {
  const {width} = Dimensions.get('window');

  return (
    <View style={{flexGrow: 1}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        // vertical // => if you want scroll vertically
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: any) => console.log('current index:', index)}
        renderItem={({index}: any) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
              Card-{index + 1}
            </Text>
          </View>
        )}
      />
      <CommonButton
        title={'Go To PagerViewScreen'}
        disabled={false}
        onPress={() => navigation.navigate('PagerViewScreen')}
      />
    </View>
  );
};

export default ReanimatedCarouselScreen;

// **********circular**********
// const PAGE_WIDTH = width;
// const itemSize = 80;
// const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;
// const animationStyleCircular: any = React.useCallback(
//   (value: number) => {
//     'worklet';

//     const itemGap = interpolate(
//       value,
//       [-3, -2, -1, 0, 1, 2, 3],
//       [-30, -15, 0, 0, 0, 15, 30],
//     );

//     const translateX =
//       interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
//       centerOffset -
//       itemGap;

//     const translateY = interpolate(
//       value,
//       [-1, -0.5, 0, 0.5, 1],
//       [60, 45, 40, 45, 60],
//     );

//     const scale = interpolate(
//       value,
//       [-1, -0.5, 0, 0.5, 1],
//       [0.8, 0.85, 1.1, 0.85, 0.8],
//     );

//     return {
//       transform: [
//         {
//           translateX,
//         },
//         {
//           translateY,
//         },
//         {scale},
//       ],
//     };
//   },
//   [centerOffset],
// );
/* <Carousel
  loop
  width={itemSize}
  height={itemSize}
  style={{
    width: PAGE_WIDTH,
    height: PAGE_WIDTH / 2,
    backgroundColor: '#010017',
  }}
  autoPlay={true}
  data={[...new Array(6).keys()]}
  customAnimation={animationStyleCircular}
  scrollAnimationDuration={1000}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}) => (
    <TouchableWithoutFeedback
      key={index}
      onPress={() => {
        console.log(index);
      }}
      // containerStyle={{flex: 1}}
      style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 50,
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'center',
        }}>
        <Text
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 40,
          }}>
          {index}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )}
/>; */

// **********rotate-scale-fade-in-out**********
// const scalee = 0.8;
// const PAGE_WIDTH = width * scalee;
// const animationStyleRotateScale: any = React.useCallback((value: number) => {
//   'worklet';

//   const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
//   const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
//   const rotateZ = `${interpolate(value, [-1, 0, 1], [-45, 0, 45])}deg`;
//   const translateX = interpolate(
//     value,
//     [-1, 0, 1],
//     [-PAGE_WIDTH, 0, PAGE_WIDTH],
//   );
//   const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

//   return {
//     transform: [{scale}, {rotateZ}, {translateX}],
//     zIndex,
//     opacity,
//   };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

/* <Carousel
  loop
  width={width}
  height={width / 2}
  autoPlay={true}
  data={[...new Array(6).keys()]}
  customAnimation={animationStyleRotateScale}
  scrollAnimationDuration={1000}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}: any) => (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
        Card-{index + 1}
      </Text>
    </View>
  )}
/>; */

// **********scale-fade-in-out**********
// const animationStyleFade: any = React.useCallback((value: number) => {
//   'worklet';
//   const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
//   const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
//   const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);
//   return {
//     transform: [{scale}],
//     zIndex,
//     opacity,
//   };
// }, []);
/* <Carousel
  loop
  width={width}
  height={width / 2}
  autoPlay={true}
  data={[...new Array(6).keys()]}
  customAnimation={animationStyleFade}
  scrollAnimationDuration={1000}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}: any) => (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
        Card-{index + 1}
      </Text>
    </View>
  )}
/>; */

// **********default-> parallax**********

/* <Carousel
  loop
  width={width}
  height={width / 2}
  autoPlay={true}
  mode="parallax"
  data={[...new Array(6).keys()]}
  scrollAnimationDuration={1000}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}: any) => (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
        Card-{index + 1}
      </Text>
    </View>
  )}
/>; */

// **********horizontal-stack-> left**********

/* <Carousel
  loop
  width={width}
  height={width / 2}
  autoPlay={true}
  data={[...new Array(6).keys()]}
  mode="horizontal-stack"
  modeConfig={{
    snapDirection: 'left',
  }}
  scrollAnimationDuration={1000}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}: any) => (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
        Card-{index + 1}
      </Text>
    </View>
  )}
/>; */

// **********flow**********
// const {width, height} = Dimensions.get('window');
// const scale = 0.9;
// const RIGHT_OFFSET = width * (1 - scale);
// const ITEM_WIDTH = width * scale;
// const ITEM_HEIGHT = 120;

// const animationStyleFlow: any = React.useCallback(
//   (value: number) => {
//     'worklet';

//     const translateY = interpolate(
//       value,
//       [-1, 0, 1],
//       [-ITEM_HEIGHT, 0, ITEM_HEIGHT],
//     );
//     const right = interpolate(
//       value,
//       [-1, -0.2, 1],
//       [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3],
//     );
//     return {
//       transform: [{translateY}],
//       right,
//     };
//   },
//   [RIGHT_OFFSET],
// );

/* <Carousel
  loop
  // autoPlay={true}
  vertical
  style={{
    justifyContent: 'center',
    width,
    height,
  }}
  width={ITEM_WIDTH}
  pagingEnabled={false}
  height={ITEM_HEIGHT}
  data={[...new Array(16).keys()]}
  scrollAnimationDuration={1000}
  customAnimation={animationStyleFlow}
  onSnapToItem={(index: any) => console.log('current index:', index)}
  renderItem={({index}) => {
    return (
      <View key={index} style={{flex: 1, padding: 10}}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            backgroundColor: 'tomato',
          }}>
          <Text
            numberOfLines={1}
            style={{
              maxWidth: ITEM_WIDTH * 0.3 - 40,
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {index}
          </Text>
        </View>
      </View>
    );
  }}
/>; */
