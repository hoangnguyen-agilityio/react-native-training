import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/HeaderLayout';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import styles from './styles';

const Plants: FC = () => {
  return (
    <View style={styles.root}>
      <Header textBg="Cactus">
        <Section style={styles.header}>
          <Text style={styles.title}>Cactus</Text>
        </Section>
      </Header>
      <Section style={styles.main}>
        <SearchBar style={{ marginTop: -25 }} />
      </Section>
    </View>
  );
};

export default Plants;
