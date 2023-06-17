import React, {FC} from 'react';
import {View} from 'react-native';
import TopTabBar from '../components/TopTabBar';
import CommonButton from '../components/CommonButton';

const TabViewScreen: FC = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <TopTabBar />
      <CommonButton
        title={'Go To CheckBoxScreen'}
        disabled={false}
        onPress={() => navigation.navigate('CheckBoxScreen')}
      />
    </View>
  );
};

export default TabViewScreen;

// => If we want to width accourding to tab text length use this

// import React from 'react';
// import {View, useWindowDimensions, Text} from 'react-native';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );
// const ThirdRoute = () => <View style={{flex: 1, backgroundColor: 'red'}} />;
// const ForthRoute = () => <View style={{flex: 1, backgroundColor: 'green'}} />;
// const FifthRoute = () => <View style={{flex: 1, backgroundColor: 'gary'}} />;
// const SixRoute = () => <View style={{flex: 1, backgroundColor: 'cyan'}} />;
// const SevenRoute = () => <View style={{flex: 1, backgroundColor: 'blue'}} />;
// const EightRoute = () => <View style={{flex: 1, backgroundColor: 'green'}} />;

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   forth: ForthRoute,
//   fifth: FifthRoute,
//   six: SixRoute,
//   seven: SevenRoute,
//   eight: EightRoute,
// });

// const TabViewScreen = () => {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//     {key: 'third', title: 'Third'},
//     {key: 'forth', title: 'Forth'},
//     {key: 'fifth', title: 'Fifth'},
//     {key: 'six', title: 'Six'},
//     {key: 'seven', title: 'Seven'},
//     {key: 'eight', title: 'Eight'},
//   ]);

//   const CustomTabBar = (props: any) => (
//     <TabBar
//       {...props}
//       scrollEnabled={true}
//       style={{backgroundColor: 'tomato'}}
//       indicatorStyle={{backgroundColor: 'white'}}
//       renderLabel={({route}) => (
//         <Text style={{fontSize: 20, color: 'white'}}>{route.title}</Text>
//       )}
//       tabStyle={{width: 'auto'}}
//     />
//   );

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{width: layout.width}}
//       renderTabBar={props => <CustomTabBar {...props} />}
//     />
//   );
// };

// export default TabViewScreen;
