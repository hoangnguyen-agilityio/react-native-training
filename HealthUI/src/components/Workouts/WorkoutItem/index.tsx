import React, { useEffect } from 'react';
import { Animated, Pressable, Text, View, Easing } from 'react-native';
import styles from './styles';
import ArrowIcon from '../../../assets/top-arrow.svg';
import WalkIcon from '../../../assets/walk.svg';
import GradientText from '../../GradientText';
import { useState } from 'react';

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
  const animationHeight = React.useRef(new Animated.Value(80)).current;
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));
  // let spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  useEffect(() => {
    if (isShow) {
      Animated.timing(animationHeight, {
        duration: 300,
        toValue: 135,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => setSpinValue(new Animated.Value(1)));
    } else {
      Animated.timing(animationHeight, {
        duration: 300,
        toValue: 80,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      Animated.timing(spinValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [isShow]);

  return (
    <Animated.View style={{ ...styles.root, height: animationHeight }}>
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

          {/* Collapsed arrow */}
          <Animated.View
            style={{
              ...styles.arrow,
              transform: [{ rotate: spin }],
            }}>
            <Pressable onPress={() => setShow()}>
              <ArrowIcon />
            </Pressable>
          </Animated.View>
        </View>
      </View>

      {/* Collapsed part */}
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
    </Animated.View>
  );
};

export default WorkoutItem;
