import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../Buttons';
import {Button, Alert} from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<Buttons />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Alert when click first button', () => {
  const alertSpy = jest.spyOn(Alert, 'alert');
  const tree = renderer.create(<Buttons />);

  const firstButton = tree.root.findAllByType(Button)[0];
  firstButton.props.onPress();
  expect(alertSpy).toHaveBeenCalled();
});

test('Alert when click second button', () => {
  const alertSpy = jest.spyOn(Alert, 'alert');
  const tree = renderer.create(<Buttons />);

  const secondButton = tree.root.findAllByType(Button)[1];
  secondButton.props.onPress();
  expect(alertSpy).toHaveBeenCalled();
});

test('Alert when click third button', () => {
  const alertSpy = jest.spyOn(Alert, 'alert');
  const tree = renderer.create(<Buttons />);

  const thirdButton = tree.root.findAllByType(Button)[2];
  expect(thirdButton.props.disabled).toBeTruthy();
});

test('Alert when click fourth button', () => {
  const alertSpy = jest.spyOn(Alert, 'alert');
  const tree = renderer.create(<Buttons />);

  const fourthButton = tree.root.findAllByType(Button)[3];
  fourthButton.props.onPress();
  expect(alertSpy).toHaveBeenCalled();
});

test('Alert when click fifth button', () => {
  const alertSpy = jest.spyOn(Alert, 'alert');
  const tree = renderer.create(<Buttons />);

  const fifthButton = tree.root.findAllByType(Button)[4];
  fifthButton.props.onPress();
  expect(alertSpy).toHaveBeenCalled();
});
