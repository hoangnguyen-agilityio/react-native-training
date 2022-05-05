import React from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import styles from './styles';
import ArrowIcon from '../../../assets/top-arrow.svg';
import WalkIcon from '../../../assets/walk.svg';
import GradientText from '../../GradientText';

interface Props {
  isShow: boolean;
  distance: number;
  calor: number;
  duration: string;
  steps: number;
  heartRate: number;
  setShow: () => void;
}

const WorkoutItem = ({
  isShow,
  setShow,
  distance,
  calor,
  duration,
  steps,
  heartRate,
}: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.flexRow}>
        <View style={styles.flexRow}>
          <View style={styles.iconWrapper}>
            <WalkIcon />
          </View>
          <View>
            <Text style={styles.title}>Outdoor run</Text>
            <Text>
              <Text style={styles.distance}>{distance}</Text>
              <Text style={styles.km}> km</Text>
            </Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <GradientText>
            <Text style={styles.calor}>{calor}</Text>
            <Text style={styles.measure}> kcal</Text>
          </GradientText>
          <Animated.View
            style={{
              ...styles.arrow,
              transform: [{ rotate: isShow ? '180deg' : '0deg' }],
            }}>
            <Pressable onPress={() => setShow()}>
              <ArrowIcon />
            </Pressable>
          </Animated.View>
        </View>
      </View>

      {isShow && (
        <View style={{ ...styles.flexRow, marginTop: 12 }}>
          <View>
            <Text style={styles.detailTitle}>Duration</Text>
            <Text style={styles.detailNumber}>{duration}</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>Total steps</Text>
            <Text style={styles.detailNumber}>{steps}</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>Avg heart rate</Text>
            <Text style={styles.detailNumber}>{heartRate}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WorkoutItem;
