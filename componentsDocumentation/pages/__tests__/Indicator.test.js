import React from 'react';
import renderer from 'react-test-renderer';
import Indicator from '../Indicator';
import {ActivityIndicator} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<Indicator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('there are 3 indicators in the page', () => {
  const tree = renderer.create(<Indicator />);
  const indicators = tree.root.findAllByType(ActivityIndicator);

  expect(indicators).toHaveLength(3);
});