import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import COLORS from '../../constants/colors';

import styles from './styles';

interface Props {
  steps: number;
  activeSteps: number;
  handleMoveToStep: (step: number) => void;
}

const Stepper: FC<Props> = ({ steps, activeSteps, handleMoveToStep }) => {
  const renderSteps = (): ReactNode => {
    let Steps = [];

    for (let index = 0; index < steps; index++) {
      const dotStyle = {
        ...styles.dots,
        backgroundColor: index === activeSteps ? COLORS.GREEN : COLORS.GRAY,
      };

      Steps.push(
        <TouchableOpacity
          key={index}
          style={dotStyle}
          onPress={() => handleMoveToStep(index)}
        />,
      );
    }

    return Steps;
  };

  return <View style={styles.root}>{renderSteps()}</View>;
};

export default Stepper;
