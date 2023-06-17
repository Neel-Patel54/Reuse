import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CommonButton from '../components/CommonButton';

const ConfirmationInput = ({navigation}: any) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log({value});

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            style={[styles.cellContainer, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text key={index} style={[styles.cell]}>
              {symbol || (isFocused ? <Cursor cursorSymbol="*" /> : null)}
            </Text>
          </View>
        )}
      />
      <CommonButton
        title={'Go To RatingsScreen'}
        disabled={false}
        onPress={() => navigation.navigate('RatingsScreen')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow',
  },
  cellContainer: {
    height: 50,
    width: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00000030',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    // width: 40,
    // height: 40,
    // lineHeight: 36,
    fontSize: 24,
    // borderWidth: 2,
    // borderColor: '#00000030',
    // textAlign: 'center',
    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default ConfirmationInput;
