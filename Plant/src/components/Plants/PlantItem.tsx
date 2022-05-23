import React, { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

interface Props {
  index: number;
  data: {
    title: string;
    kingdom: string;
    family: string;
    desc: string;
    image: any;
  };
  handleRedirectToDetail: () => void;
}

const PlantItem: FC<Props> = ({ index, data, handleRedirectToDetail }) => {
  const backgroundColor = index % 2 ? 'rgba(196, 196, 196, 0.07)' : 'white';

  return (
    <TouchableHighlight onPress={handleRedirectToDetail}>
      <View
        style={[
          styles.row,
          styles.itemWrap,
          { backgroundColor: backgroundColor },
        ]}>
        <View style={styles.imageWrap}>
          <Image source={data.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.row}>
            <View style={styles.leftCol}>
              <Text style={styles.subTitle}>KINGDOM</Text>
              <Text style={styles.body}>{data.kingdom}</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.subTitle}>FAMILY</Text>
              <Text style={styles.body}>{data.family}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.subTitle}>DESCRIPTION</Text>
            <Text style={styles.body}>{data.desc}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PlantItem;
