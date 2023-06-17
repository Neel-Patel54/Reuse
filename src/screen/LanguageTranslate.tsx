import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonButton from '../components/CommonButton';

const LanguageTranslate = ({navigation}: any) => {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('SelectedLanaguge');
      if (value !== null) {
        // value previously stored
        i18n.changeLanguage(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('SelectedLanaguge', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{t('greeting')}</Text>
      <Text style={styles.txt}>{t('welcome')}</Text>
      <CommonButton
        title={'English'}
        disabled={false}
        onPress={() => {
          i18n.changeLanguage('en');
          storeData('en');
        }}
      />
      <CommonButton
        title={'France'}
        disabled={false}
        onPress={() => {
          i18n.changeLanguage('fr');
          storeData('fr');
        }}
      />
      {/* go to input screen check text are changing or not */}
      <CommonButton
        title={'Go To Input Screen'}
        onPress={() => navigation.navigate('InputScreen')}
      />
    </View>
  );
};

export default LanguageTranslate;

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
});
