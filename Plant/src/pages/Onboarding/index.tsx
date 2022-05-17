import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';

import FullWidthBtn from '../../components/Button';
import Stepper from '../../components/Stepper';
import { NavigationListType } from '../../constants/navigationList';
import Illustration from './Illustration';

import styles from './styles';

const ONBOARDING_CONTENT = [
  {
    title: 'Identify Plants',
    desc: "You can identify the plants you don't know \n through your camera",
  },
  {
    title: 'Learn Many Plants Species',
    desc: "Let's learn about the many plant species that \n exist in this world",
  },
  {
    title: 'Read Many Articles About Plant',
    desc: "Let's learn more about beautiful plants and read \n many articles about plants and gardening",
  },
];

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Home'>;
}

const Onboarding: FC<Props> = ({ navigation }) => {
  const [step, setStep] = useState(0);

  const handleMoveToStep = (step: number): void => {
    if (step <= 2 && step >= 0) {
      setStep(step);
    }
  };

  const onClickNext = (): void => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigation.navigate('SignIn');
    }
  };

  const btnText = step === 2 ? 'Sign up' : 'Next';

  return (
    <View style={styles.root}>
      <Illustration step={step} />
      <View>
        <Text style={styles.title}>{ONBOARDING_CONTENT[step].title}</Text>
        <Text style={styles.desc}>{ONBOARDING_CONTENT[step].desc}</Text>
      </View>
      <View>
        <Stepper
          steps={3}
          activeSteps={step}
          handleMoveToStep={handleMoveToStep}
        />
      </View>
      <FullWidthBtn text={btnText} onPress={onClickNext} />
    </View>
  );
};

export default Onboarding;
