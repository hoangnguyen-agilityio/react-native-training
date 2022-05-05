import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import FeatureLayout from '../../components/FeatureLayout';
import SectionLayout from '../../components/SectionLayout';
import UserBanner from '../../components/UserBanner';
import WaterIcon from '../../assets/water.svg';
import HeartIcon from '../../assets/duotone.svg';
import HeartGraph from '../../assets/heart-graph.svg';
import CaloriesIcon from '../../assets/calories.svg';
import WalkIcon from '../../assets/walk.svg';
import BedIcon from '../../assets/bed.svg';
import styles from './styles';
import TabBar from '../../components/TabBar';

import { NavigationListType } from '../../constants/navigationList';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Home'>;
}

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}>
        <SectionLayout>
          <UserBanner
            title="Hi, Nam Duong"
            date="Wednesday 29 Dec"
            avatarUrl={require('../../assets/user.png')}
          />
        </SectionLayout>
        <SectionLayout>
          <View style={styles.flexRow}>
            <FeatureLayout
              title="Heart"
              icon={<HeartIcon />}
              number="105"
              measure="bmp"
              theme="dark"
              customStyle={styles.flexItemLeft}>
              <HeartGraph width={'100%'} />
            </FeatureLayout>
            <FeatureLayout
              title="Water"
              icon={<WaterIcon />}
              number="1.0"
              measure="liters"
              customStyle={styles.flexItemRight}
              onPress={() => navigation.navigate('Onboarding')}>
              <View style={styles.waterIllusion}>
                <Image source={require('../../assets/water-illu.png')} />
              </View>
            </FeatureLayout>
          </View>

          <View style={styles.flexRow}>
            <View style={styles.flexItemLeft}>
              <FeatureLayout
                title="Walk"
                icon={<WalkIcon />}
                customStyle={{ flex: 2, marginBottom: 12, paddingBottom: 16 }}>
                <View style={{ alignItems: 'center' }}>
                  <AnimatedCircularProgress
                    size={90}
                    rotation={0}
                    width={6}
                    fill={60}
                    lineCap="round"
                    tintColor="#5142AB"
                    backgroundColor="#F3F4F7">
                    {fill => (
                      <View style={{ alignItems: 'center' }}>
                        <Text style={styles.number}>5460</Text>
                        <Text style={styles.measure}>steps</Text>
                      </View>
                    )}
                  </AnimatedCircularProgress>
                </View>
              </FeatureLayout>

              <FeatureLayout
                title="Sleep"
                icon={<BedIcon />}
                number="06:32"
                measure="hours"
                customStyle={{ flex: 1, marginTop: 12 }}
              />
            </View>
            <FeatureLayout
              title="Calories"
              icon={<CaloriesIcon />}
              number="540"
              measure="kcal"
              linearGradientColors={['#FFFFFF', '#EDEFF7']}
              onPress={() =>
                navigation.navigate('Calories', { title: 'Calories' })
              }
              customStyle={{
                ...styles.flexItemRight,
                backgroundColor:
                  'linear-gradient(360deg, #FFFFFF 0%, #EDEFF7 108.19%)',
              }}>
              <Image
                style={styles.caloriesGraph}
                source={require('../../assets/line.png')}
              />
            </FeatureLayout>
          </View>
        </SectionLayout>
      </ScrollView>
      <TabBar />
    </View>
  );
};

export default Home;
