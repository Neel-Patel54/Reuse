import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

// npm i react-native-linear-gradient require for that

const ShimmerLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '3', text: 'Item 3'},
    {id: '4', text: 'Item 4'},
    {id: '5', text: 'Item 5'},
  ];

  useEffect(() => {
    // Simulating data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Simulating data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const renderItem = ({item}: any) => (
    <View style={{padding: 10}}>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        style={{borderWidth: 0.3}}
        visible={!isLoading}>
        <Text style={{color: 'black'}}>{item.text}</Text>
      </ShimmerPlaceHolder>
    </View>
  );

  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        style={{borderWidth: 0.3}}
        visible={!isLoading}>
        <Text style={{color: 'black'}}>Hello Text</Text>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        visible={!isLoading}
        style={styles.box}>
        <View style={[styles.box, {marginTop: 0}]}>
          <Text style={styles.txt}>Hello Box</Text>
        </View>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        visible={!isLoading}
        style={styles.circle}>
        <View style={[styles.circle, {marginTop: 0}]}>
          <Text style={styles.txt}>Hello Circle</Text>
        </View>
      </ShimmerPlaceHolder>
      <View style={{height: '30%'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ShimmerLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  txt: {
    color: 'black',
    textAlign: 'center',
  },
});
