import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import FeatureLayout from '.';
import SectionLayout from '../SectionLayout';
import WaterIcon from '../../assets/water.svg';
import HeartIcon from '../../assets/duotone.svg';

storiesOf('FeatureLayout', module)
  .addDecorator(getStory => <SectionLayout>{getStory()}</SectionLayout>)
  .add('Default', () => (
    <FeatureLayout
      title="Water"
      icon={<WaterIcon />}
      number="1.0"
      measure="liters">
      <Text>Test Feature Layout</Text>
    </FeatureLayout>
  ))
  .add('Dark layout', () => (
    <FeatureLayout
      title="Heart"
      icon={<HeartIcon />}
      number="105"
      measure="bmp"
      theme="dark">
      <Text style={{ color: '#FFFFFF' }}>Test Feature Layout</Text>
    </FeatureLayout>
  ));
