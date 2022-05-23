import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  label: string;
}
const Chip: FC<Props> = ({ label }) => (
  <View style={styles.root}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

export default Chip;
