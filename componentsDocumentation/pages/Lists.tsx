import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Flatlist from '../components/FlatList';
import Section from '../components/Section';
import Sectionlist from '../components/SectionList';
import Title from '../components/Title';
import VirtualizedList from '../components/VirtualizedList';

const ListsPage = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Section>
        <Title>FlatList</Title>
        <Flatlist />
      </Section>
      <Section>
        <Title>SectionList</Title>
        <Sectionlist />
      </Section>
      <Section>
        <Title>VirtualizedList</Title>
        <VirtualizedList />
      </Section>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export default ListsPage;
