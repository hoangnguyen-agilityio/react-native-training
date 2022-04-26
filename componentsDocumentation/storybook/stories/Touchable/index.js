import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

export const TouchableHighlightComponent = () => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#AAAAAA"
    onPress={() => alert('Pressed!')}
    style={styles.button}>
    <Text>Press Here</Text>
  </TouchableHighlight>
);

export const TouchableOpacityComponent = () => (
  <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
    <Text>Press Here</Text>
  </TouchableOpacity>
);

export const TouchableWithoutFeedbackComponent = () => (
  <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
    <View style={styles.button}>
      <Text>Press Here</Text>
    </View>
  </TouchableWithoutFeedback>
);

export const TouchableNativeFeedbackComponent = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        setRippleColor(randomHexColor());
        setRippleOverflow(!rippleOverflow);
      }}
      background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}>
      <View style={styles.button}>
        <Text>Press Here</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
