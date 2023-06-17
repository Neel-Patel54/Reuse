import {View, Text} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  // withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';

const GestureHandlerAnimation = ({navigation}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      // Store the current position when the gesture starts
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      // Update the translation values based on the gesture's movement
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      // Return the view to the initial position using a spring animation
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      // translateX.value = withTiming(0, {duration: 2000});
      // translateY.value = withTiming(0, {duration: 2000});
    },
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {height: 100, width: 100, backgroundColor: 'red'},
            animatedStyle,
          ]}
        />
      </PanGestureHandler>
      <CommonButton
        title={'Go To SwipeView'}
        disabled={false}
        onPress={() => navigation.navigate('SwipeView')}
      />
    </GestureHandlerRootView>
  );
};

export default GestureHandlerAnimation;
