import { CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ArticleList from '../../components/Articles';
import Header from '../../components/HeaderLayout';
import Navigation from '../../components/Navigation';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import { NavigationListType } from '../../constants/navigationList';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Articles'>;
}

const Articles: FC<Props> = ({ navigation }) => {
  const handleRedirectToDetailPage = () => {
    navigation.navigate('ArticleDetail');
  };

  return (
    <ScrollView>
      <Header textBg="Articles">
        <Section style={styles.header}>
          <Navigation
            handleBack={() => navigation.dispatch(CommonActions.goBack())}
          />
          <Text style={styles.title}>Articles</Text>
        </Section>
      </Header>
      <Section>
        <SearchBar style={{ marginTop: -25 }} />

        <ArticleList handleRedirectToDetailPage={handleRedirectToDetailPage} />
      </Section>
    </ScrollView>
  );
};

export default Articles;
