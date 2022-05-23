import React, { FC } from 'react';
import { View } from 'react-native';
import PlantItem from './PlantItem';
import styles from './styles';

interface Props {
  handleRedirectToDetail: () => void;
}

const Plants: FC<Props> = ({ handleRedirectToDetail }) => {
  return (
    <View style={styles.root}>
      {DATA.map((item, index) => (
        <PlantItem
          key={item.title}
          data={item}
          index={index}
          handleRedirectToDetail={handleRedirectToDetail}
        />
      ))}
    </View>
  );
};

export default Plants;

const DATA = [
  {
    title: 'Red Cactus',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-1.png'),
  },
  {
    title: 'Fat Cactus',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-2.png'),
  },
  {
    title: 'Circle Cactus',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-3.png'),
  },
  {
    title: 'Red Cactus1',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-1.png'),
  },
  {
    title: 'Fat Cactus1',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-2.png'),
  },
  {
    title: 'Circle Cactus1',
    kingdom: 'Plantae',
    family: 'Cactaceae',
    desc: 'Cactus spines are produced from specialized structures...',
    image: require('../../assets/images/plant-3.png'),
  },
];
