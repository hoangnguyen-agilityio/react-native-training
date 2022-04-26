import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {
  TouchableHighlightComponent,
  TouchableOpacityComponent,
  TouchableWithoutFeedbackComponent,
  TouchableNativeFeedbackComponent,
} from './';

storiesOf('Touchable', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('TouchableHighlight', () => <TouchableHighlightComponent />)
    .add('TouchableOpacity', () => <TouchableOpacityComponent />)
    .add('TouchableWithoutFeedback', () => <TouchableWithoutFeedbackComponent />)
    .add('TouchableNativeFeedback', () => <TouchableNativeFeedbackComponent />);
