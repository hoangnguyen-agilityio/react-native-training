import React, { FC } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Catalogs from '../../components/Catalogs';
import Header from '../../components/HeaderLayout';
import PlantTypes from '../../components/PlantTypes';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import styles from './styles';

const Home: FC = () => (
  <ScrollView>
    <Header textBg="Home">
      <Section>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Hello Taylor,</Text>
            <Text style={styles.headerDesc}>Let’s Learn More About Plants</Text>
          </View>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </View>
      </Section>
    </Header>
    <Section style={styles.main}>
      <SearchBar style={{ marginTop: -25 }} />
      <View style={styles.catalogsWrapper}>
        <Catalogs />
      </View>

      <Text style={styles.sectionTitle}>Plant Types</Text>
      <View style={styles.horizontalListWrapper}>
        <PlantTypes />
      </View>
      <Text style={styles.sectionTitle}>Photography</Text>
    </Section>
    <Text>Home page</Text>
  </ScrollView>
);

export default Home;
