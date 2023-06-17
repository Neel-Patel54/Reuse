import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import {TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface InputScreenProps {
  navigation: any;
}

const InputScreen: React.FC<InputScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const searchAnimation = useSharedValue(1);
  const data = ['data1', 'data2', 'item1', 'Item2'];
  const [searchText, setSearchText] = useState('');
  const [item, setItem] = useState<any>([]);
  const [value, setValue] = useState(true);

  useEffect(() => {
    searchAnimation.value = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    const newArray: string[] = data.filter(list => {
      return list.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
    setItem(newArray);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        searchAnimation.value === 1
          ? withTiming('80%', {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });

  return (
    <View>
      <Text style={styles.txt}>{t('greeting')}</Text>
      <Text style={styles.txt}>{t('welcome')}</Text>
      <CommonTextInput
        value={searchText}
        onChangeText={(txt: string) => setSearchText(txt)}
        placeholder={'Please Type Anything..'}
        placeholderTextColor={'red'}
        inputContainerStyle={styles.inputHeight}
        iconName={''}
      />
      <CommonTextInput
        placeholder={'Please Type Anything..'}
        placeholderTextColor={'red'}
        inputContainerStyle={styles.inputHeight}
        isIcon={true}
        iconName={'home'}
        iconSize={26}
        iconColor={'red'}
        iconStyle={styles.inputIconStyle}
        onChangeText={undefined}
        value={''}
      />

      <Animated.View style={[styles.animatedInputContainer, animatedStyle]}>
        <TextInput
          placeholder="Search here..."
          placeholderTextColor={'black'}
          style={styles.animatedInput}
        />
        <Pressable
          onPress={() => {
            console.log('press');

            if (searchAnimation.value === 1) {
              searchAnimation.value = 0;
              setValue(true);
            } else {
              searchAnimation.value = 1;
              setValue(false);
            }
          }}
          style={styles.iconContainer}>
          {value ? (
            <MaterialIcons name={'search'} size={28} color={'black'} />
          ) : (
            <MaterialIcons name={'close'} size={28} color={'black'} />
          )}
        </Pressable>
      </Animated.View>

      <CommonButton title={'Search'} disabled={false} onPress={handleSearch} />
      <FlatList
        data={item.length == 0 ? data : item}
        renderItem={({item}: any) => (
          <Text style={styles.flatListText}>{item}</Text>
        )}
      />
      <CommonButton
        title={'Go To Button Screen'}
        disabled={false}
        onPress={() => navigation.navigate('ButtonScreen')}
      />
    </View>
  );
};

export default InputScreen;
const styles = StyleSheet.create({
  txt: {
    color: 'black',
    textAlign: 'center',
  },
  inputHeight: {
    height: 50,
  },
  inputIconStyle: {
    backgroundColor: 'white',
  },
  animatedInputContainer: {
    width: '80%',
    height: 48,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#d9d8d8',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  animatedInput: {
    paddingLeft: 6,
    flex: 1,
    color: 'black',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
  },
  flatListText: {
    color: 'black',
    backgroundColor: 'yellow',
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 50,
  },
});
