import React, { FC, ReactNode } from 'react';
import { StyleProp, Text, TextInput, View, ViewStyle } from 'react-native';
import FindIcon from '../../assets/images/find.svg';

import styles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SearchBar: FC<Props> = ({ style = {} }) => (
  <View style={[styles.root, style]}>
    <TextInput
      style={styles.input}
      placeholder="Search For Plants"
      placeholderTextColor={'#D2D2D2'}
    />
    <FindIcon width={14} height={14} style={styles.findIcon} />
  </View>
);

export default SearchBar;
