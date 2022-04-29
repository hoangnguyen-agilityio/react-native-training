import React from 'react';
import { ScrollView, useWindowDimensions, View, Image, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import FeatureLayout from '../../components/FeatureLayout';
import SectionLayout from '../../components/SectionLayout';
import UserBanner from '../../components/UserBanner';
import WaterIcon from '../../assets/water.svg';
import HeartIcon from '../../assets/duotone.svg';
import HeartGraph from '../../assets/heart-graph.svg';
import CaloriesIcon from '../../assets/calories.svg';
import WalkIcon from '../../assets/walk.svg';
import BedIcon from '../../assets/bed.svg';
import useStyle from './styles';

const Home = () => {
  const styles = useStyle();

  return (
    <ScrollView style={styles.root}>
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
            customStyle={styles.flexItemRight}>
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
              customStyle={{ flex: 2, marginBottom: 12 }}>
              <View style={{ alignItems: 'center' }}>
                <ProgressCircle
                  percent={65}
                  radius={50}
                  borderWidth={6}
                  color="#5142AB"
                  shadowColor="#F3F4F7"
                  bgColor="#FFFFFF"
                >
                  <Text style={styles.number}>5460</Text>
                  <Text style={styles.measure}>steps</Text>
                </ProgressCircle>
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
  );
};

export default Home;
