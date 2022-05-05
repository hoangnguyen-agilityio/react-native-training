import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/GradientText';
import Chart from '../../components/LineChart';
import SectionLayout from '../../components/SectionLayout';
import Workouts from '../../components/Workouts';
import styles from './styles';

const Calories = () => {
  return (
    <LinearGradient colors={['#EDEFF7', '#FFFFFF']} style={styles.root}>
      <ScrollView contentContainerStyle={{ paddingTop: 24 }}>
        <GradientText style={styles.title}>540</GradientText>
        <GradientText style={styles.desc}>calories burned</GradientText>
        <Chart />
        <SectionLayout>
          <Workouts />
        </SectionLayout>
      </ScrollView>
    </LinearGradient>
  );
};

export default Calories;
