import React, {useState} from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const TouchablePage = () => {
  const [rippleColor, setRippleColor] = useState<string>(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Section>
          <Title>TouchableHighlight</Title>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#AAAAAA"
            onPress={() => alert('Pressed!')}
            style={styles.button}>
            <Text>Press Here</Text>
          </TouchableHighlight>
        </Section>
        <Section>
          <Title>TouchableOpacity</Title>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Pressed!')}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </Section>
        <Section>
          <Title>TouchableWithoutFeedback</Title>
          <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
            <View style={styles.button}>
              <Text>Press Here</Text>
            </View>
          </TouchableWithoutFeedback>
        </Section>

        {Platform.OS === 'android' && (
          <Section>
            <Title>TouchableNativeFeedback</Title>
            <TouchableNativeFeedback
              onPress={() => {
                setRippleColor(randomHexColor());
                setRippleOverflow(!rippleOverflow);
              }}
              background={TouchableNativeFeedback.Ripple(
                rippleColor,
                rippleOverflow,
              )}>
              <View style={styles.button}>
                <Text>Press Here</Text>
              </View>
            </TouchableNativeFeedback>
          </Section>
        )}
      </ScrollView>
    </SafeAreaView>
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

export default TouchablePage;
