import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface IllustrationProps {
  step: number;
}

const Illustration: FC<IllustrationProps> = ({ step }) => {
  let mainIllustration = null;
  let leftIllustration = null;
  let rightIllustration = null;

  switch (step) {
    case 0:
      mainIllustration = require('../../assets/images/onboarding-illustration-1.png');
      leftIllustration = null;
      rightIllustration = null;
      break;
    case 1:
      mainIllustration = require('../../assets/images/onboarding-illustration-2.png');
      leftIllustration = require('../../assets/images/onboarding-illustration-small.png');
      rightIllustration = null;
      break;
    case 2:
      mainIllustration = require('../../assets/images/onboarding-illustration-3.png');
      leftIllustration = require('../../assets/images/onboarding-illustration-small.png');
      rightIllustration = require('../../assets/images/onboarding-illustration-small.png');
      break;
  }

  return (
    <View style={styles.illustratorWrapper}>
      {leftIllustration && (
        <Image source={leftIllustration} style={styles.leftIllustrator} />
      )}
      {rightIllustration && (
        <Image source={rightIllustration} style={styles.rightIllustrator} />
      )}
      <Image
        source={mainIllustration}
        style={{
          marginTop: 24,
          alignSelf: 'center',
          width: 255,
          height: 255,
        }}
      />
    </View>
  );
};

export default Illustration;
