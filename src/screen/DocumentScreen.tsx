import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CommonButton from '../components/CommonButton';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';

// android steps react-native-file-viewer
{
  /* <queries>
    <intent>
    <action android:name="android.intent.action.VIEW" />
    <data android:mimeType="application/pdf" />
    </intent>
</queries> */
}
// If you don't know the MIME type in advance, set "mimeType" to "*/*".

const DocumentScreen = ({navigation}) => {
  const [pickDocuments, setPickDocuments] = useState([]);

  const handleDocumentPicker = async () => {
    const item: any = await DocumentPicker.pick({
      allowMultiSelection: true,
      //   type: [types.doc, types.docx],
    });
    await FileViewer.open(item[0].uri);
    setPickDocuments(item);
  };

  console.log('pickDocuments111', pickDocuments);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{color: 'black'}}>DocumentScreen</Text>
        <CommonButton
          title={'Pick document'}
          disabled={false}
          onPress={handleDocumentPicker}
        />
      </View>
      <CommonButton
        title={'Go To ShareDataScreen'}
        disabled={false}
        onPress={() => navigation.navigate('ShareDataScreen')}
      />
    </View>
  );
};

export default DocumentScreen;

