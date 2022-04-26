import React from 'react';
import renderer from 'react-test-renderer';
import FlatList from '../FlatList';
import {TouchableOpacity} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<FlatList />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('there are 3 item in the list', () => {
  const tree = renderer.create(<FlatList />);
  const items = tree.root.findAllByType(TouchableOpacity);

  expect(items).toHaveLength(3);
});