import React, { FC } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';

import styles from './styles';

interface PlantTypesData {
  id: string;
  bgImg: any;
  title: string;
  number: number;
}

const PLANT_TYPES_DATA = [
  {
    id: '1',
    bgImg: require('../../assets/images/home-plants.png'),
    title: 'Home Plants',
    number: 68,
  },
  {
    id: '2',
    bgImg: require('../../assets/images/home-plants.png'),
    title: 'Huge Plants',
    number: 102,
  },
  {
    id: '3',
    bgImg: require('../../assets/images/home-plants.png'),
    title: 'Home Plants',
    number: 68,
  },
  {
    id: '4',
    bgImg: require('../../assets/images/home-plants.png'),
    title: 'Huge Plants',
    number: 102,
  },
];

const PlantType: FC<{ item: PlantTypesData }> = ({ item }) => {
  return (
    <ImageBackground source={item.bgImg} style={styles.itemWrapper}>
      <View style={styles.illusionBg} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.number} Types of Plants</Text>
    </ImageBackground>
  );
};

const PlantTypes: FC = () => {
  return (
    <FlatList
      horizontal
      data={PLANT_TYPES_DATA}
      renderItem={PlantType}
      keyExtractor={item => item.id}
      style={styles.root}
    />
  );
};

export default PlantTypes;
