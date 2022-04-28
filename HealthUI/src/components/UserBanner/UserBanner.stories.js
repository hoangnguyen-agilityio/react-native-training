import { storiesOf } from '@storybook/react-native';
import React from 'react';
import UserBanner from '.';

storiesOf('UserBanner', module)
  .add('default', () => (
    <UserBanner
      title="Hi, Nam Duong"
      date="Wednesday 29 Dec"
      avatarUrl={require("../../assets/user.png")}
    />
  ));
