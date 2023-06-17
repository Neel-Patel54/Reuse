import {View} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RatingsScreen = ({navigation}: any) => {
  const WATER_IMAGE = require('../assets/tree.png');
  const ratingCompleted = (rating: any) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <View>
      <AirbnbRating />

      <AirbnbRating
        count={11}
        reviews={[
          'Terrible',
          'Bad',
          'Meh',
          'OK',
          'Good',
          'Hmm...',
          'Very Good',
          'Wow',
          'Amazing',
          'Unbelievable',
          'Jesus',
        ]}
        defaultRating={11}
        size={20}
      />
      <Rating
        showRating
        onFinishRating={ratingCompleted}
        style={{paddingVertical: 10}}
      />

      <Rating
        type="heart"
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={ratingCompleted}
      />

      <Rating
        type="custom"
        ratingImage={WATER_IMAGE}
        ratingColor="#3498db"
        ratingBackgroundColor="#c8c7c8"
        ratingCount={10}
        imageSize={30}
        onFinishRating={ratingCompleted}
        style={{paddingVertical: 10}}
      />
      <CommonButton
        title={'Go To DraggableFlatlist'}
        disabled={false}
        onPress={() => navigation.navigate('DraggableFlatlist')}
      />
    </View>
  );
};

export default RatingsScreen;
