import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import {FlatList, Button} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Home page will has a list with 9 items', () => {
  const tree = renderer.create(<Home />);
  const list = tree.root.findAllByType(FlatList);
  const items = tree.root.findAllByType(Button);

  expect(list).toHaveLength(1);
  expect(items).toHaveLength(9);
});

test('Click each item will move to separate screen', () => {
  const mockNavigation = { navigate: jest.fn() };
  const tree = renderer.create(<Home navigation={mockNavigation} />);
  const items = tree.root.findAllByType(Button);

  items[0].props.onPress();

  expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);

  items[1].props.onPress();

  expect(mockNavigation.navigate).toHaveBeenCalledTimes(2);

  items[2].props.onPress();

  expect(mockNavigation.navigate).toHaveBeenCalledTimes(3);

  items[3].props.onPress();

  expect(mockNavigation.navigate).toHaveBeenCalledTimes(4);
  // ...
});