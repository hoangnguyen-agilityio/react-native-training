import { CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Navigation from '../../components/Navigation';
import Section from '../../components/SectionLayout';
import { NavigationListType } from '../../constants/navigationList';
import LocationIcon from '../../assets/images/location.svg';
import DotIcon from '../../assets/images/dot.svg';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Profile'>;
}

const Profile: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headerWrap}>
        <ImageBackground
          source={require('../../assets/images/header-bg.png')}
          resizeMode="cover"
          style={styles.headerBg}>
          <View style={styles.firstEllipse} />
          <View style={styles.secondEllipse} />
          <Section style={styles.header}>
            <Navigation
              handleBack={() => navigation.dispatch(CommonActions.goBack())}
            />
            <View style={styles.headerContent}>
              <Image
                source={require('../../assets/images/avatar.png')}
                style={{ width: 80, height: 80 }}
              />
              <Text style={styles.name}>Taylor Swift</Text>
              <View style={styles.row}>
                <LocationIcon
                  width={17}
                  height={17}
                  style={styles.locationIcon}
                />
                <Text style={styles.address}>Los Angeles, California</Text>
              </View>
            </View>
          </Section>
        </ImageBackground>
      </View>

      <Section style={{ flex: 1 }}>
        <Text style={styles.title}>Your Collected Plants</Text>

        <View style={{ flexDirection: 'row' }}>
          <DotIcon width={14} height={14} style={styles.dotIcon} />

          <View>
            <Text style={styles.subTitle}>Alagatre Plant</Text>
            <Text style={styles.date}>02 . 01 . 2019</Text>
          </View>
        </View>

        <View style={styles.imagesWrap}>
          <View style={styles.imageLeftCol}>
            <Image
              source={require('../../assets/images/profile-image-1.png')}
              resizeMode="cover"
              style={styles.leftImage}
            />
          </View>
          <View style={styles.imageRightCol}>
            <Image
              source={require('../../assets/images/profile-image-2.png')}
              resizeMode="cover"
              style={styles.topRightImage}
            />
            <Image
              source={require('../../assets/images/profile-image-3.png')}
              resizeMode="cover"
              style={styles.bottomRightImage}
            />
          </View>
        </View>
      </Section>
      <View style={{ height: 110 }} />
    </ScrollView>
  );
};

export default Profile;
