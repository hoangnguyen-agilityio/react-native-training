import { storiesOf } from '@storybook/react-native';
import React from 'react';
import IconButton from '.';
import CenterView from '../CenterView';
import ArrowIcon from '../../assets/right-arrow.svg';
import AddIcon from '../../assets/add.svg';

storiesOf('IconButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('With next icon', () => (
    <IconButton>
      <ArrowIcon />
    </IconButton>
  ))
  .add('With add icon', () => (
    <IconButton>
      <AddIcon />
    </IconButton>
  ));
