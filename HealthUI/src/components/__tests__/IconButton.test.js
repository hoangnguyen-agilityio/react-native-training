import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../IconButton';
import { Text } from 'react-native';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <IconButton>
        <Text>
          Test Icon Button
        </Text>
      </IconButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
