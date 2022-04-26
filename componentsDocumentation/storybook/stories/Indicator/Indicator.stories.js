import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import CenterView from '../CenterView';

storiesOf('Indicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ActivityIndicator />)
  .add('Large Indicator', () => (
    <ActivityIndicator size="large" color="#00ff00" />
  ))
  .add('Small Indicator with custom color', () => (
    <ActivityIndicator size="small" color="#0000ff" />
  ));
