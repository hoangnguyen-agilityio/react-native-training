import React, {useState} from 'react';
import {SafeAreaView, Switch, StyleSheet} from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const SwitchPage = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
  <SafeAreaView style={styles.container}>
    <Section>
      <Title>Default:</Title>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Section>
    <Section>
      <Title>Custom color:</Title>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Section>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  }
});

export default SwitchPage;
