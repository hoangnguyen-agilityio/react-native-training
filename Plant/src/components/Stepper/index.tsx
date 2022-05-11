import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/colors';

import styles from './styles';

interface Props {
  steps: number;
  activeSteps: number;
}

const Stepper: FC<Props> = ({ steps, activeSteps }) => {
  const renderSteps = (): ReactNode => {
    let Steps = [];

    for (let index = 0; index < steps; index++) {
      const dotStyle = {
        ...styles.dots,
        backgroundColor: index === activeSteps ? COLORS.GREEN : COLORS.GRAY,
      };

      Steps.push(<TouchableOpacity style={dotStyle} onPress={() => {}} />);
    }

    return Steps;
  };

  return <View style={styles.root}>{renderSteps()}</View>;
};

export default Stepper;
