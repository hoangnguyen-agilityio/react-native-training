import React, { FC } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';

import styles from './styles';

interface PhotographiesData {
  id: string;
  bgImg: any;
  tag: string;
}

const PHOTOGRAPHIES_DATA = [
  {
    id: '1',
    bgImg: require('../../assets/images/photography-mini.png'),
    tag: 'Mini',
  },
  {
    id: '2',
    bgImg: require('../../assets/images/photography-homely.png'),
    tag: 'Homely',
  },
  {
    id: '3',
    bgImg: require('../../assets/images/photography-mini.png'),
    tag: 'Cute',
  },
  {
    id: '4',
    bgImg: require('../../assets/images/photography-homely.png'),
    tag: 'Mini',
  },
];

const Photography: FC<{ item: PhotographiesData }> = ({ item }) => {
  return (
    <ImageBackground source={item.bgImg} style={styles.itemWrapper}>
      <View style={styles.illusionBg}>
        <View style={styles.tagWrapper}>
          <Text style={styles.tag}>#{item.tag}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const Photographies: FC = () => {
  return (
    <FlatList
      horizontal
      data={PHOTOGRAPHIES_DATA}
      renderItem={Photography}
      keyExtractor={item => item.id}
      style={styles.root}
    />
  );
};

export default Photographies;
