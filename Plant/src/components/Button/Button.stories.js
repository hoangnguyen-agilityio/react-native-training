import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import FullWidthBtn from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Full Width Button', () => (
    <FullWidthBtn text="FullWidth Button" onPress={() => {}} />
    // <View><Text>Text</Text></View>
  ));
