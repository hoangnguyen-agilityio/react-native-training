import React, { FC } from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Chip from '../../components/Chip';
import Section from '../../components/SectionLayout';
import styles from './styles';
import PlusIcon from '../../assets/images/plus.svg';

const ArticleDetail: FC = () => {
  return (
    <ScrollView style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/article-detail.png')}
        resizeMode="cover"
        style={styles.header}></ImageBackground>
      <Section style={styles.paddingSection}>
        <View style={styles.row}>
          <Chip label="VEGETABLES" />
          <Chip label="GARDEN" />
        </View>

        <View style={styles.paddingSection}>
          <Text style={styles.title}>
            Even on Urban Excursions, Finding Mother Nature's Charms
          </Text>
        </View>

        <View style={[styles.paddingSection, styles.authorWrap]}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/article-detail-author.png')}
              style={styles.avatar}
            />

            <View>
              <Text>Shylla Monic</Text>
              <Text>2019 . 01 . 01</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.followBtn}>
            <View style={styles.row}>
              <PlusIcon width={7} height={7} style={styles.plusIcon} />
              <Text style={styles.followText}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.paddingSection}>
          <Text style={styles.body}>
            Public parks aside, getting a dose of nature can be a tricky task
            during an urban escape. But nat ure should and can fit into that
            city getaway, according to Kally Ellis, the founder of the London
            florist company McQueens and the in-house florist for the Maybourne
            Hotel Group. “Connecting with the natural world wherever you are is
            a great antidote to jet lag and travel tiredness,” she said. “Plan
            ts and flowers can refresh us, boost our energy and help us
            recalibrate.”
          </Text>
        </View>
      </Section>
    </ScrollView>
  );
};

export default ArticleDetail;
