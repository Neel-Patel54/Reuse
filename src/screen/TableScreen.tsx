import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import CommonButton from '../components/CommonButton';

const TableScreen = ({navigation}) => {
  const [tableHead, setTableHead] = useState([
    'Head',
    'Head2',
    'Head3',
    'Head4',
    'Head5',
    'Head6',
    'Head7',
    'Head8',
    'Head9',
  ]);
  const [widthArr, setWidthArr] = useState([
    40, 60, 80, 100, 120, 140, 160, 180, 200,
  ]);

  const tableData = [];
  for (let i = 0; i < 30; i += 1) {
    const rowData = [];
    for (let j = 0; j < 9; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  console.log({tableData});

  return (
    <View
      style={{flex: 1, padding: 10, paddingTop: 10, backgroundColor: '#fff'}}>
      <CommonButton
        title={'Go To LottieAnimationScreen'}
        disabled={false}
        onPress={() => navigation.navigate('LottieAnimationScreen')}
      />
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={{height: 50, backgroundColor: 'tomato'}}
              textStyle={{
                textAlign: 'center',
                fontWeight: '100',
                color: 'white',
              }}
            />
          </Table>
          <ScrollView style={{marginTop: -1}}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[
                    {height: 40, backgroundColor: '#E7E6E1'},
                    index % 2 && {backgroundColor: '#F7F6E7'},
                  ]}
                  textStyle={{
                    textAlign: 'center',
                    fontWeight: '100',
                    color: 'black',
                  }}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default TableScreen;
