import React from 'react';
import renderer from 'react-test-renderer';
import StatusBarPage from '../StatusBar';
import {StatusBar, Button} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<StatusBarPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('page elements', () => {
  const tree = renderer.create(<StatusBarPage />);

  expect(tree.root.findAllByType(StatusBar)).toHaveLength(1);
});

test('Show / hide StatusBar when click button', () => {
  const tree = renderer.create(<StatusBarPage />);
  const statusBar = tree.root.findAllByType(StatusBar)[0];
  const toggleButton = tree.root.findAllByType(Button)[0];

  expect(statusBar.props.hidden).toBeFalsy();

  toggleButton.props.onPress();

  expect(statusBar.props.hidden).toBeTruthy();

  toggleButton.props.onPress();

  expect(statusBar.props.hidden).toBeFalsy();
});
