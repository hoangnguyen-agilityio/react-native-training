import React from 'react';
import { ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const IndicatorPage = () => (
  <SafeAreaView style={styles.container}>
    <Section>
      <Title>Default:</Title>
      <ActivityIndicator />
    </Section>
    <Section>
      <Title>Large Indicator with custom color:</Title>
      <ActivityIndicator size="large" color="#00ff00" />
    </Section>
    <Section>
      <Title>Small Indicator with custom color:</Title>
      <ActivityIndicator size="small" color="#0000ff" />
    </Section>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default IndicatorPage;
