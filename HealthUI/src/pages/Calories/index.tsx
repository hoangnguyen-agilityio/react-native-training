import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Chart from '../../components/LineChart';
import SectionLayout from '../../components/SectionLayout';
import Workouts from '../../components/Workouts';
import styles from './styles';

const Calories = () => {
  return (
    <LinearGradient colors={['#EDEFF7', '#FFFFFF']}>
    <ScrollView>
      <Text style={styles.title}>540</Text>
      <Text style={styles.desc}>calories burned</Text>
      <Chart />
      <SectionLayout>
        <Workouts />
      </SectionLayout>
    </ScrollView>
    </LinearGradient>
  );
};

export default Calories;
