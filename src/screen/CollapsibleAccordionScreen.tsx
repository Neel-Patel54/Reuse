import React from 'react';
import {View} from 'react-native';
import CollapsibleAccordion from '../components/CollapsibleAccordion';
import CommonButton from '../components/CommonButton';

// Implement Switch, RefreshControl and CollapsibleAccordion

interface AccordionProps {
  navigation: any;
}

const CollapsibleAccordionScreen: React.FC<AccordionProps> = ({navigation}) => {
  const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];

  return (
    <View>
      <CollapsibleAccordion accordionList={SECTIONS} touchableColor={'red'} />
      <CommonButton
        title={'Go To SwitchButtonScreen'}
        disabled={false}
        onPress={() => navigation.navigate('SwitchButtonScreen')}
      />
    </View>
  );
};

export default CollapsibleAccordionScreen;
