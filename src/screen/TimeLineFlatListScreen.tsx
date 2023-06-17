import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CommonButton from '../components/CommonButton';
import Timeline from 'react-native-timeline-flatlist';
import {ScrollView} from 'react-native-gesture-handler';

const TimeLineFlatListScreen = ({navigation}: any) => {
  const data = [
    {
      time: '09:00',
      title: 'Archery Training',
      description:
        'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course.',
      lineColor: '#009688',
      icon: require('../assets/tree.png'),
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: '10:45',
      title: 'Play Badminton',
      icon: require('../assets/tree.png'),
      description:
        'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
    },
    {
      time: '12:00',
      title: 'Lunch',
      icon: require('../assets/tree.png'),
    },
    {
      time: '14:00',
      title: 'Watch Soccer',
      icon: require('../assets/tree.png'),
      description:
        'Team sport played between two teams of eleven players with a spherical ball.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg',
    },
    {
      time: '16:30',
      title: 'Go to Fitness center',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
      icon: require('../assets/tree.png'),
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg',
    },
  ];

  const renderDetail = (rowData: any) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;

    if (rowData.description && rowData.imageUrl) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: rowData.imageUrl}} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );
    }

    return (
      <View style={styles.detailContainer}>
        {title}
        {desc}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Timeline
          data={data}
          circleSize={20}
          //   circleColor="#009688"
          circleColor="red"
          //   lineColor="#009688"
          lineColor="blue"
          timeContainerStyle={{minWidth: 52}}
          timeStyle={styles.time}
          descriptionStyle={styles.description}
          options={{
            style: {paddingTop: 5},
          }}
          innerCircle={'dot'}
          renderDetail={renderDetail}
        />
      </ScrollView>
      <CommonButton
        title={'Go To ProgressStepScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ProgressStepScreen')}
      />
    </View>
  );
};

export default TimeLineFlatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  detailContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textDescription: {
    marginLeft: 10,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  time: {
    textAlign: 'center',
    backgroundColor: '#009688',
    color: 'white',
    padding: 5,
    borderRadius: 12,
  },
  description: {
    color: 'tomato',
    borderWidth: 1,
  },
});
