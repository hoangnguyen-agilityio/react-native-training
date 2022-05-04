import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default function CenterView({ children }: { children: ReactNode }) {
  return <View style={styles.main}>{children}</View>;
}
