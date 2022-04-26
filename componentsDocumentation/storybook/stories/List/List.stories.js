import { storiesOf } from '@storybook/react-native';
import React from 'react';
import FlatList from '../../../components/FlatList';
import Sectionlist from '../../../components/SectionList';
import Virtualizedlist from '../../../components/VirtualizedList';
import CenterView from '../CenterView';

storiesOf('List', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('FlatList', () => <FlatList />)
  .add('SectionList', () => <Sectionlist />)
  .add('Virtualizedlist', () => <Virtualizedlist />);
