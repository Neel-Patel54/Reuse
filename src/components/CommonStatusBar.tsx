import React, {FC} from 'react';
import {StatusBar} from 'react-native';

interface CommonStatusBarProps {
  backgroundColor: string;
  barStyle: any;
}

const CommonStatusBar: FC<CommonStatusBarProps> = ({
  backgroundColor,
  barStyle,
}) => {
  return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};

export default CommonStatusBar;
