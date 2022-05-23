import React, { FC } from 'react';
import { ImageBackground, ScrollView, View, Text } from 'react-native';
import Chip from '../../components/Chip';
import Section from '../../components/SectionLayout';
import styles from './styles';
import { Rating } from 'react-native-ratings';

const PlantDetail: FC = () => {
  return (
    <ScrollView style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/plant-detail.png')}
        resizeMode="cover"
        style={styles.header}></ImageBackground>
      <Section style={styles.paddingSection}>
        <View style={styles.row}>
          <Chip label="DANGER" />
          <Chip label="DECORATION" />
        </View>

        <View style={styles.paddingSection}>
          <Text style={styles.title}>Circle Cactus</Text>
        </View>

        <View style={styles.ratingWrap}>
          <Rating
            imageSize={14}
            ratingCount={5}
            startingValue={4}
            readonly
            style={styles.rating}
          />
          <Text style={styles.ratingNumber}>4.1</Text>
        </View>

        <View style={[styles.row, styles.paddingSection]}>
          <View style={styles.fill}>
            <Text style={styles.subTitle}>KINGDOM</Text>
            <Text style={styles.body}>Plantae</Text>
          </View>
          <View style={styles.fill}>
            <Text style={styles.subTitle}>FAMILY</Text>
            <Text style={styles.body}>Cactaceae</Text>
          </View>
        </View>

        <View style={styles.paddingSection}>
          <Text style={styles.subTitle}>DESCRIPTION</Text>
          <Text style={styles.body}>
            The word "cactus" derives, through Latin, from the Ancient Greek
            κάκτος, kaktos, a name orig inally used by Theophrastus for a spiny
            plant whose identity is not certain. Cacti occur in a wide range of
            shapes and sizes. Most cacti live in habitats subject to at least
            some drought.
          </Text>
        </View>
      </Section>
    </ScrollView>
  );
};

export default PlantDetail;
