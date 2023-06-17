import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ListContent {
  title: string;
  content: string;
}

interface CollapsibleAccordionProps {
  accordionList: ListContent[];
  touchableColor?: string;
  sectionTitleContainerStyle?: ViewStyle;
  sectionTitleTextStyle?: TextStyle;
  headerContainerStyle?: ViewStyle;
  headerTitleStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
  contentTextStyle?: TextStyle;
}

const CollapsibleAccordion: FC<CollapsibleAccordionProps> = ({
  accordionList,
  touchableColor = 'grey',
  sectionTitleContainerStyle,
  sectionTitleTextStyle,
  headerContainerStyle,
  headerTitleStyle,
  contentContainerStyle,
  contentTextStyle,
}) => {
  const [activeSections, setActiveSections] = useState([]);

  const renderSectionTitle = (section: ListContent) => {
    return (
      <View style={[styles.sectionTitleContainer, sectionTitleContainerStyle]}>
        <Text style={[styles.sectionTitleText, sectionTitleTextStyle]}>
          {section.title}
        </Text>
      </View>
    );
  };

  const renderHeader = (section: ListContent) => {
    return (
      <View style={[styles.headerContainer, headerContainerStyle]}>
        <Text style={[styles.headerTitle, headerTitleStyle]}>
          {section.title}
        </Text>
        <MaterialIcons name={'chevron-right'} size={28} color={'red'} />
      </View>
    );
  };

  const renderContent = (section: ListContent) => {
    return (
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <Text style={[styles.contentText, contentTextStyle]}>
          {section.content}
        </Text>
      </View>
    );
  };

  const updateSections = (activeIndex: []) => {
    setActiveSections(activeIndex);
  };

  return (
    <View>
      <Accordion
        sections={accordionList}
        activeSections={activeSections}
        expandMultiple
        renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        underlayColor={touchableColor}
      />
    </View>
  );
};

export default CollapsibleAccordion;

const styles = StyleSheet.create({
  sectionTitleContainer: {
    padding: 4,
  },
  sectionTitleText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerContainer: {
    width: '100%',
    padding: 4,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '100%',
    padding: 4,
    backgroundColor: '#D3D3D3',
    height: 45,
    justifyContent: 'center',
  },
  contentText: {
    color: 'black',
    fontSize: 14,
  },
});