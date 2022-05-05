import React from 'react';
import { ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import Chart from '../../components/LineChart';
import SectionLayout from '../../components/SectionLayout';
import Workouts from '../../components/Workouts';
import styles from './styles';

const Calories = () => {
  return (
    <LinearGradient colors={['#EDEFF7', '#FFFFFF']}>
    <ScrollView>
      <LinearTextGradient colors={['#A274CD', '#5142AB']} style={styles.title}>
      540
      {/* <Text style={styles.desc}>calories burned</Text> */}
      </LinearTextGradient>
      <Chart />
      <SectionLayout>
        <Workouts />
      </SectionLayout>
    </ScrollView>
    </LinearGradient>
  );
};

export default Calories;
