import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { mockWorkData } from '../../constants/mockWorkoutList';
import styles from './styles';
import WorkoutItem from './WorkoutItem';

const Workouts = () => {
  const [showingList, setShow] = useState<number[]>([]);
  const [isShowAll, setShowAll] = useState<boolean>(false);

  const toggleItem = (id: number) => {
    if (showingList.includes(id)) {
      setShow(showingList.filter(item => item !== id));
    } else {
      setShow([...showingList, id]);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout</Text>
        <Pressable onPress={() => setShowAll(!isShowAll)}>
          <Text style={styles.showAll}>
            {isShowAll ? 'Hide all' : 'Show all'}
          </Text>
        </Pressable>
      </View>

      {mockWorkData.map(item => (
        <WorkoutItem
          key={item.id}
          distance={item.distance}
          calor={item.calor}
          duration={item.duration}
          steps={item.steps}
          heartRate={item.heartRate}
          isShow={showingList.includes(item.id) || isShowAll}
          setShow={() => toggleItem(item.id)}
        />
      ))}
    </View>
  );
};
export default Workouts;
