import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ArticleList from '../../components/Articles';
import Header from '../../components/HeaderLayout';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import styles from './styles';

const Articles = () => {
  return (
    <ScrollView>
      <Header textBg="Articles">
        <Section style={styles.header}>
          <Text style={styles.title}>Articles</Text>
        </Section>
      </Header>
      <Section>
        <SearchBar style={{ marginTop: -25 }} />

        <ArticleList />
      </Section>
    </ScrollView>
  );
};

export default Articles;
