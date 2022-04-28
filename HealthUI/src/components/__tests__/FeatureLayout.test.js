import React from 'react';
import { Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import FeatureLayout from '../FeatureLayout';
import WaterIcon from '../../assets/water.svg';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <FeatureLayout
        title="Water"
        icon={<WaterIcon />}
        number="1.0"
        measure="liters">
        <Text>Test Feature Layout</Text>
      </FeatureLayout>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('component elements', () => {
  const tree = renderer.create(
    <FeatureLayout
      title="Water"
      icon={<WaterIcon />}
      number="1.0"
      measure="liters">
      <Text>Test Feature Layout</Text>
    </FeatureLayout>,
  ).root;

  expect(tree.findAllByType(Text)).toHaveLength(4);
  expect(tree.findAllByType(WaterIcon)).toHaveLength(1);
});
