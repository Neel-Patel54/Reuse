import {View, Text} from 'react-native';
import React, {useState} from 'react';
import { Calendar, LocaleConfig, CalendarList } from 'react-native-calendars';
import CommonButton from '../components/CommonButton';

const CalendarsScreen = ({navigation}) => {
  //   LocaleConfig.locales.fr = {
  //     monthNames: [
  //       'Janvier',
  //       'Février',
  //       'Mars',
  //       'Avril',
  //       'Mai',
  //       'Juin',
  //       'Juillet',
  //       'Août',
  //       'Septembre',
  //       'Octobre',
  //       'Novembre',
  //       'Décembre',
  //     ],
  //     monthNamesShort: [
  //       'Janv.',
  //       'Févr.',
  //       'Mars',
  //       'Avril',
  //       'Mai',
  //       'Juin',
  //       'Juil.',
  //       'Août',
  //       'Sept.',
  //       'Oct.',
  //       'Nov.',
  //       'Déc.',
  //     ],
  //     dayNames: [
  //       'Dimanche',
  //       'Lundi',
  //       'Mardi',
  //       'Mercredi',
  //       'Jeudi',
  //       'Vendredi',
  //       'Samedi',
  //     ],
  //     dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  //     today: "Aujourd'hui",
  //   };
  //   LocaleConfig.defaultLocale = 'fr';
  const [selected, setSelected] = useState('');
  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        style={{
          borderWidth: 1,
          borderColor: 'tomato',
          //   height: 350,
          margin: 10,
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
          },
          '2023-06-23': {selected: true, marked: true, selectedColor: 'blue'},
        }}
      />
      <Text style={{color: 'black'}}>{selected}</Text>
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        // onVisibleMonthsChange={months => {
        //   console.log('now these months are visible', months);
        // }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={30}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={10}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
      />
      <CommonButton
        title={'Go To SwipeButtonScreen'}
        disabled={false}
        onPress={() => navigation.navigate('SwipeButtonScreen')}
      />
    </View>
  );
};

export default CalendarsScreen;
