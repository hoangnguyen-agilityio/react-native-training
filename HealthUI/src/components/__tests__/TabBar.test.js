import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../IconButton';
import TabBar from '../TabBar';

test('renders correctly', () => {
  const tree = renderer.create(<TabBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('component elements', () => {
  const tree = renderer.create(<TabBar />).root;

  expect(tree.findAllByType(IconButton)).toHaveLength(1);
});
