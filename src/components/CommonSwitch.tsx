import React, {FC} from 'react';
import {Switch, View} from 'react-native';

interface CommonSwitchProps {
  iosBackgroundColor: string;
  isEnabled: boolean;
  onValueChange: any;
  thumbDisableBackground: string;
  thumbEnableBackground: string;
  trackDisableBackground: string;
  trackEnableBackground: string;
}

const CommonSwitch: FC<CommonSwitchProps> = ({
  iosBackgroundColor,
  isEnabled,
  onValueChange,
  thumbDisableBackground,
  thumbEnableBackground,
  trackDisableBackground,
  trackEnableBackground,
}) => {
  return (
    <View>
      <Switch
        trackColor={{
          false: trackDisableBackground,
          true: trackEnableBackground,
        }}
        thumbColor={isEnabled ? thumbEnableBackground : thumbDisableBackground}
        ios_backgroundColor={iosBackgroundColor}
        onValueChange={onValueChange}
        value={isEnabled}
      />
    </View>
  );
};

export default CommonSwitch;
