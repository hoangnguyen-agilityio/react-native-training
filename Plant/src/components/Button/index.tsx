import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

const FullWidthBtn: FC<Props> = ({ text = '', onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default FullWidthBtn;
