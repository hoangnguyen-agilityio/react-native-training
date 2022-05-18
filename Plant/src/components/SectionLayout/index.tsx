import React, { FC, ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: ReactNode,
  style?: StyleProp<ViewStyle>,
}

const Section: FC<Props> = ({ children, style = {} }) => {
  return (
    <View style={[styles.root, style]}>
        {children}
    </View>
  );
};

export default Section;
