import React from 'react';
import renderer from 'react-test-renderer';
import SectionList from '../SectionList';
import { TouchableOpacity } from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<SectionList />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('there are 4 sections in the list', () => {
  const tree = renderer.create(<SectionList />);
  const sections = tree.root.findAllByProps({
    ['data-testID']: 'section-header',
  });

  expect(sections).toHaveLength(4);
});
