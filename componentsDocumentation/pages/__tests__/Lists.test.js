import React from 'react';
import renderer from 'react-test-renderer';
import Lists from '../Lists';
import Flatlist from '../../components/FlatList';
import Sectionlist from '../../components/SectionList';
import VirtualizedList from '../../components/VirtualizedList';

test('renders correctly', () => {
  const tree = renderer.create(<Lists />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders elements', () => {
  const tree = renderer.create(<Lists />);
  const flatlist = tree.root.findAllByType(Flatlist);
  const sectionlist = tree.root.findAllByType(Sectionlist);
  const virtualizedList = tree.root.findAllByType(VirtualizedList);

  expect(flatlist).toHaveLength(1);
  expect(sectionlist).toHaveLength(1);
  expect(virtualizedList).toHaveLength(1);
});
