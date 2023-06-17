import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import CommonButton from '../components/CommonButton';

const StepIndicatorScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const stepLabels = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
  const renderStepIndicator = ({position, stepStatus}) => {
    console.log({stepStatus});
    return (
      <View style={styles.stepIndicator}>
        <Text style={styles.stepLabel}>
          {position + 1}
          {stepStatus}
        </Text>
      </View>
    );
  };
  console.log({currentStep});
  return (
    <View style={styles.container}>
      <StepIndicator
        currentPosition={currentStep}
        customStyles={customStyles}
        labels={stepLabels}
        stepCount={stepLabels.length}
        renderStepIndicator={renderStepIndicator}
      />
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setCurrentStep(currentStep + 1)}>
        <Text style={{color: 'black'}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}
        onPress={() => setCurrentStep(currentStep - 1)}>
        <Text style={{color: 'black'}}>Previous</Text>
      </TouchableOpacity>
      <CommonButton
        title={'Go To SimpleDialogsScreen'}
        disabled={false}
        onPress={() => navigation.navigate('SimpleDialogsScreen')}
      />
    </View>
  );
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  stepIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4aae4f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default StepIndicatorScreen;
