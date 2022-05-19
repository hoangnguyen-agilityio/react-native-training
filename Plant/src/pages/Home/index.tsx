import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Catalogs from '../../components/Catalogs';
import Header from '../../components/HeaderLayout';
import Photographies from '../../components/Photographies';
import PlantTypes from '../../components/PlantTypes';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/SectionLayout';
import { NavigationListType } from '../../constants/navigationList';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Home'>;
}

const Home: FC<Props> = ({ navigation }) => {
  const handleMoveToPage = (page: keyof NavigationListType) => {
    if (page) {
      navigation.navigate(page);
    }
  };

  return (
    <ScrollView>
      <Header textBg="Home">
        <Section>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.headerTitle}>Hello Taylor,</Text>
              <Text style={styles.headerDesc}>
                Let’s Learn More About Plants
              </Text>
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
          <Catalogs handleMoveToPage={handleMoveToPage} />
        </View>

        <Text style={styles.sectionTitle}>Plant Types</Text>
        <View style={styles.horizontalListWrapper}>
          <PlantTypes />
        </View>
        <Text style={styles.sectionTitle}>Photography</Text>
        <View style={styles.horizontalListWrapper}>
          <Photographies />
        </View>
      </Section>
    </ScrollView>
  );
};

export default Home;
