import React from 'react';
import renderer from 'react-test-renderer';
import VirtualizedListComponent from '../VirtualizedList';
import { Text, VirtualizedList } from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<VirtualizedListComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('there are 50 items in the list but only render 4 items', () => {
  const tree = renderer.create(<VirtualizedListComponent />);
  const list = tree.root.findAllByType(VirtualizedList)[0];
  const items = tree.root.findAllByType(Text);

  expect(list.props.getItemCount()).toBe(50);
  expect(items).toHaveLength(4);
});
