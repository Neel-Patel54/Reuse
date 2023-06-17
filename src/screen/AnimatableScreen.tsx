/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CommonButton from '../components/CommonButton';

interface AnimatableScreenProps{
  navigation: any;
}

const AnimatableScreen: FC<AnimatableScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CommonButton
        title={'Go To TabViewScreen'}
        disabled={false}
        onPress={() => navigation.navigate('TabViewScreen')}
      />
      <Animatable.View
        animation="slideInDown"
        easing="ease-out"
        // iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5}}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{color: 'black'}}>
          Bounce me!
        </Animatable.Text>
      </Animatable.View>
      <Animatable.Text style={{color: 'black'}} animation="zoomInUp">
        Zoom me up, Scotty
      </Animatable.Text>
      <Animatable.View
        animation="fadeIn"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeIn!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInDown"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInDown!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInDownBig"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInDownBig!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInUp!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUpBig"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInUpBig!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeft"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInLeft!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInLeftBig"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInLeftBig!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInRight"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInRight!</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInRightBig"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>fadeInRightBig!</Text>
      </Animatable.View>
      <Animatable.View
        animation="flipInX"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>flipInX!</Text>
      </Animatable.View>
      <Animatable.View
        animation="flipInY"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>flipInY!</Text>
      </Animatable.View>
      <Animatable.View
        animation="slideInDown"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>slideInDown!</Text>
      </Animatable.View>
      <Animatable.View
        animation="slideInUp"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>slideInUp!</Text>
      </Animatable.View>
      <Animatable.View
        animation="slideInLeft"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>slideInLeft!</Text>
      </Animatable.View>
      <Animatable.View
        animation="slideInRight"
        easing="ease-out"
        iterationCount="infinite"
        style={{backgroundColor: 'pink', padding: 5, marginTop: 2}}>
        <Text style={{color: 'black'}}>slideInRight!</Text>
      </Animatable.View>
    </View>
  );
};

export default AnimatableScreen;
