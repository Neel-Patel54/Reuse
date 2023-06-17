import React, {useState, FC} from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: 'yellow'}} />;

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute;
// });

const TopTabBar: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [routes] = useState([
    {key: 'first', title: 'First Tab'},
    {key: 'second', title: 'Second Tab'},
    {key: 'third', title: 'Third Tab'},
  ]);

  const handleTabPress = (key: any) => {
    setIsPressed(true);
    const tabIndex = routes.findIndex(route => route.key === key);
    if (tabIndex !== -1) {
      setIndex(tabIndex);
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'orange', borderWidth: 1}}
      // renderLabel={({route, focused, color}) => (
      //   <Text style={{color, margin: 8}}>{route.title}</Text>
      // )}
      // renderIcon={({route, focused, color}) => (
      //   <MaterialIcons
      //     name={focused ? 'home' : 'person'}
      //     size={26}
      //     color={color}
      //     style={{}}
      //   />
      // )}
      onTabPress={({route}) => handleTabPress(route.key)}
      renderIndicator={({navigationState, position}) => {
        const width = layout.width / navigationState.routes.length;
        const translateX = Animated.multiply(
          isPressed ? index : position,
          width,
        );

        return (
          <Animated.View
            style={[
              {
                position: 'absolute',
                height: 2,
                backgroundColor: 'red', // Customize the indicator color as desired
                bottom: 0,
              },
              {
                width,
                transform: [{translateX}],
              },
            ]}
          />
        );
      }}
      renderLabel={({route, focused, color}) => {
        return (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name={focused ? 'home' : 'person'}
              size={26}
              color={color}
              style={{marginRight: 8}}
            />
            <Text style={{color}}>{route.title}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      // renderScene={renderScene}
      renderScene={() => {
        if (index === 0) {
          return <FirstRoute />;
        } else if (index === 1) {
          return <SecondRoute />;
        } else {
          return <ThirdRoute />;
        }
      }}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      // renderTabBar={() => null}
      tabBarPosition={'top' || 'bottom'}
      renderTabBar={renderTabBar}
      onSwipeStart={() => setIsPressed(false)}
    />
  );
};

export default TopTabBar;
