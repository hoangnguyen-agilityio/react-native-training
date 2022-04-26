import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
  SafeAreaView,
  Alert,
} from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const PressableComponent = () => {
  const [timesPressed, setTimesPressed] = useState<number>(0);

  let textLog: string = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const ButtonsPage = () => (
  <SafeAreaView style={styles.container}>
    <Section>
      <Title>Default:</Title>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </Section>
    <Section>
      <Title>Custom color:</Title>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </Section>
    <Section>
      <Title>Disabled:</Title>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </Section>
    <Section>
      <Title>Button width fit to content</Title>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </Section>
    <Section>
      <Title>Pressable</Title>
      <PressableComponent />
    </Section>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default ButtonsPage;
