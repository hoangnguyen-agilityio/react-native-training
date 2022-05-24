import { CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Pressable, ScrollView, SectionList, Text, View } from 'react-native';
import Header from '../../components/HeaderLayout';
import Navigation from '../../components/Navigation';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import COLORS from '../../constants/colors';
import { NavigationListType } from '../../constants/navigationList';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Species'>;
}

const Species: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Header textBg="Species">
        <Section style={styles.header}>
          <Navigation
            handleBack={() => navigation.dispatch(CommonActions.goBack())}
          />
          <Text style={styles.title}>Species</Text>
        </Section>
      </Header>
      <Section style={styles.main}>
        <SearchBar style={{ marginTop: -25 }} />
        <SectionList
          style={styles.list}
          sections={SPECIES_DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('Plants')}>
              <Text style={styles.sectionItem}>{item}</Text>
            </Pressable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </Section>
    </View>
  );
};

export default Species;

const SPECIES_DATA = [
  {
    title: 'A',
    data: ['Aizza', 'Aurger', 'Aisotto'],
  },
  {
    title: 'B',
    data: ['Brench Fries', 'Bnion Rings', 'Bried Shrimps'],
  },
  {
    title: 'C',
    data: [
      'CACTUS',
      'CISTUS',
      'CAESALPINIA',
      'CINNAMOMUM',
      'CIRSIUM',
      'CISSUS',
    ],
  },
  {
    title: 'D',
    data: ['DIERAMA', 'DIGITALIS', 'DAHLIA', 'DAPHNE'],
  },
  {
    title: 'E',
    data: [
      'ECHINACEA',
      'ECHINOPS',
      'ECAESALPINIA',
      'ECINNAMOMUM',
      'ECIRSIUM',
      'ECISSUS',
    ],
  },
  {
    title: 'F',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'GD',
    data: ['Cheese Cake', 'Ice Cream'],
  },
  {
    title: 'H',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
