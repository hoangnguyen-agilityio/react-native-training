import React from 'react';
import renderer from 'react-test-renderer';
import ModalPage from '../Modal';
import {Modal, Pressable} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<ModalPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('page elements', () => {
  const tree = renderer.create(<ModalPage />);
  const modal = tree.root.findAllByType(Modal);

  expect(modal).toHaveLength(1);
});

test('Show / hide modal when click button', () => {
  const tree = renderer.create(<ModalPage />);
  const modal = tree.root.findAllByType(Modal);

  tree.root.findAllByType(Pressable)[0].props.onPress();

  expect(modal[0].props.visible).toBeTruthy();

  tree.root.findAllByType(Pressable)[0].props.onPress();

  expect(modal[0].props.visible).toBeFalsy();
});
