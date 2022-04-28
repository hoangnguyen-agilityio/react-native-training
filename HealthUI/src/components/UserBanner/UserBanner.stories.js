import { storiesOf } from '@storybook/react-native';
import React from 'react';
import UserBanner from '.';
import SectionLayout from '../SectionLayout';

storiesOf('UserBanner', module)
  .addDecorator(getStory => <SectionLayout>{getStory()}</SectionLayout>)
  .add('default', () => (
    <UserBanner
      title="Hi, Nam Duong"
      date="Wednesday 29 Dec"
      avatarUrl={require('../../assets/user.png')}
    />
  ));
