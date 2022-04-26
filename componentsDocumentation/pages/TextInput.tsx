import React, {useState} from 'react';
import {TextInput, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Section from '../components/Section';
import Title from '../components/Title';

const TextInputPage = () => {
  const [text, onChangeText] = useState<string>('');
  const [number, onChangeNumber] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Section>
          <Title>Default:</Title>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </Section>
        <Section>
          <Title>With placeholder and numeric keyboard</Title>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </Section>
        <Section>
          <Title>With placeholder and multiple lines</Title>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputMultiline}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputMultiline: {
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputPage;
