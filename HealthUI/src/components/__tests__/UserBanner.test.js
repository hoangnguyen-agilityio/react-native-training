import React from 'react';
import { Image, Text } from 'react-native';
import renderer from 'react-test-renderer';
import UserBanner from '../UserBanner';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <UserBanner
        title="Hi, Nam Duong"
        date="Wednesday 29 Dec"
        avatarUrl={require('../../assets/user.png')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('component elements', () => {
  const tree = renderer.create(
    <UserBanner
      title="Hi, Nam Duong"
      date="Wednesday 29 Dec"
      avatarUrl={require('../../assets/user.png')}
    />,
  ).root;

  expect(tree.findAllByType(Text)).toHaveLength(2);
  expect(tree.findAllByType(Image)).toHaveLength(1);
});
