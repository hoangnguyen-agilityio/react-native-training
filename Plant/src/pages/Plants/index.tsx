import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/HeaderLayout';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import PlantList from '../../components/Plants';
import styles from './styles';

const Plants: FC = () => {
  return (
    <ScrollView style={styles.root}>
      <Header textBg="Cactus">
        <Section style={styles.header}>
          <Text style={styles.title}>Cactus</Text>
        </Section>
      </Header>
      <Section>
        <SearchBar style={{ marginTop: -25 }} />
      </Section>
      <View style={{ ...styles.main, marginTop: 12 }}>
        <PlantList />
      </View>
    </ScrollView>
  );
};

export default Plants;
