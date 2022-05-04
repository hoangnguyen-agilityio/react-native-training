import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import Workouts from '.';
import { mockWorkData } from '../../constants/mockWorkoutList';
import SectionLayout from '../SectionLayout';
import WorkoutItem from './WorkoutItem';

storiesOf('Workouts', module)
  .addDecorator(getStory => (
    <ScrollView>
      <SectionLayout>{getStory()}</SectionLayout>
    </ScrollView>
  ))
  .add('Workouts list', () => <Workouts />)
  .add('Workout item collapsed', () => (
    <WorkoutItem
      distance={mockWorkData[0].distance}
      calor={mockWorkData[0].calor}
      duration={mockWorkData[0].duration}
      steps={mockWorkData[0].steps}
      heartRate={mockWorkData[0].heartRate}
      isShow={false}
      setShow={() => {}}
    />
  ))
  .add('Workout item opened', () => (
    <WorkoutItem
      distance={mockWorkData[0].distance}
      calor={mockWorkData[0].calor}
      duration={mockWorkData[0].duration}
      steps={mockWorkData[0].steps}
      heartRate={mockWorkData[0].heartRate}
      isShow={true}
      setShow={() => {}}
    />
  ));
