import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
interface AnimationProps {
  navigation: any;
}

const Animation: React.FC<AnimationProps> = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimation = () => {
    setIsAnimated(!isAnimated);
    // Animated.spring(animation, {
    //   toValue: isAnimated ? 0 : 1,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(animation, {
      toValue: isAnimated ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animationContainer,
          {borderRadius: isAnimated ? 50 : 0},
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -200],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5],
                }),
              },
            ],
          },
        ]}>
        <Text style={styles.txt}>Animation</Text>
      </Animated.View>
      <CommonButton
        title={'Click for animation'}
        buttonContainerStyle={styles.btnContainer}
        buttonTextStyle={styles.btnText}
        disabled={false}
        onPress={handleAnimation}
      />
      <CommonButton
        title={'Go To LanguageTranslate'}
        onPress={() => navigation.navigate('LanguageTranslate')}
      />
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    textAlign: 'center',
  },
  animationContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: 'yellow',
  },
  btnText: {
    color: 'blue',
    fontWeight: 'normal',
  },
});

// Implement i18 lanaguge translation
// 1. npm install i18next react-i18next @react-native-async-storage/async-storage
// 2. Inside src create new folder with locales and add en.json, fr.json...
// 3. Add i18n file in locales and wrap i18n provider with entire app.
