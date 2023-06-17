import {ScrollView, View} from 'react-native';
import React from 'react';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
import CommonButton from '../components/CommonButton';

const NeomorphShadowScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Shadow
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 1,
            shadowColor: 'red',
            shadowRadius: 10,
            borderRadius: 20,
            backgroundColor: 'white',
            width: 100,
            height: 100,
            // ...include most of View/Layout styles
          }}
        />

        <Neomorph
          inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: 10,
            shadowOpacity: 0.3,
            borderRadius: 25,
            backgroundColor: '#DDDDDD',
            width: 150,
            height: 150,
            marginTop: 10,
          }}
          darkShadowColor="green" // Replace with your desired color
          lightShadowColor="green" // Replace with your desired color
        />

        <Neomorph
          style={{
            shadowRadius: 3,
            borderRadius: 100,
            backgroundColor: '#DDDDDD',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Neomorph
            inner
            style={{
              shadowRadius: 7,
              borderRadius: 90,
              backgroundColor: '#F19F9F',
              width: 180,
              height: 180,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Neomorph
              style={{
                shadowRadius: 7,
                borderRadius: 50,
                backgroundColor: '#DDDDDD',
                width: 100,
                height: 100,
              }}
            />
          </Neomorph>
        </Neomorph>

        <Neomorph
          darkShadowColor="#FF3333" // <- set this
          lightShadowColor="#3344FF" // <- this
          style={{
            shadowOpacity: 0.3, // <- and this or yours opacity
            shadowRadius: 15,
            borderRadius: 50,
            backgroundColor: '#ECF0F3',
            width: 200,
            height: 200,
            marginTop: 40,
          }}
        />
      </ScrollView>
      <CommonButton
        title={'Go To VideoScreen'}
        disabled={false}
        onPress={() => navigation.navigate('VideoScreen')}
      />
    </View>
  );
};

export default NeomorphShadowScreen;

// need to install this support package also.
// npm install @react-native-community/art --save
