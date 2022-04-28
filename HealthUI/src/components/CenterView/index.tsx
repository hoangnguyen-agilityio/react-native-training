import React, { ReactNode } from 'react';
import { View } from 'react-native';
import style from './style';

export default function CenterView({ children }: { children: ReactNode }) {
  return <View style={style.main}>{children}</View>;
}
