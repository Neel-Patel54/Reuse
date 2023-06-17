import {View, Text, RefreshControl, ScrollView} from 'react-native';
import React, {useState, useCallback} from 'react';
import CommonButton from '../components/CommonButton';

const RefreshControlScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={{color: 'black', textAlign: 'center', margin: 4}}>
          Pull down to see RefreshControl indicator
        </Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
        <Text style={{color: 'black'}}>item1</Text>
      </ScrollView>
      <CommonButton
        title={'Go To AnimatableScreen'}
        disabled={false}
        onPress={() => navigation.navigate('AnimatableScreen')}
      />
    </View>
  );
};

export default RefreshControlScreen;
