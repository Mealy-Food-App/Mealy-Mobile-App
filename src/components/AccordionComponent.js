import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import RadioButton from "./RadioButton"
import Collapsible from 'react-native-collapsible';

const AccordionComponent = ({data, selectedOptions, setSelectedOptions }) => {
  console.log("AccordionComponent data:", data);
  const handleOptionSelect = (sectionId, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [sectionId]: value,
    });
  };



  const renderAccordionTitle = (name) => {
    return (
      <View style ={styles.accordHeader}>
        <Text style={styles.titleText}>{name}</Text>
      </View>
    );
  };

  const renderRadioButtons = (options, sectionId) => {
    return (
      <RadioButton
        data={options.map((option) => ({ value: option }))}
        onSelect={(value) => handleOptionSelect(sectionId, value)}
      />
    );
  };

  const renderAccordionContent = (options, sectionId) => {
    return (
      <View style={styles.contentContainer}>
        {renderRadioButtons(options, sectionId)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data.slice().reverse().map(item => (
        <View key={item._id}>
            {renderAccordionTitle(item.name)}
            {renderAccordionContent(item.options, item.name)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  accordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#ebebeb',
    paddingLeft: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 8,
  },
  titleText: {
    fontFamily: "Montserrat_500Medium",
    color: "#00205C",
    fontSize: 12,
    lineHeight: 14
  },
  contentContainer: {
    paddingTop: 8,
  },
});

export default AccordionComponent;
