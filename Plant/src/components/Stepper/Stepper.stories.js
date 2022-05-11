import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Stepper from '.';
import CenterView from '../CenterView';

storiesOf('Stepper', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Stepper steps={3} activeSteps={0} />
  ));
