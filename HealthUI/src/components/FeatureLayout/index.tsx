import React, { ReactNode } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  theme?: 'dark' | 'light';
  number?: string;
  measure?: string;
  customStyle?: object;
  onPress?: () => void;
}

const FeatureLayout = (props: Props) => {
  const {
    title,
    theme,
    icon,
    children = null,
    number,
    measure,
    customStyle = {},
    onPress = () => {},
  } = props;
  const rootStyle = theme === 'dark' ? styles.darkRoot : styles.root;
  const titleStyle = theme === 'dark' ? styles.darkTitle : styles.title;
  const numberStyle = theme === 'dark' ? styles.darkNumber : styles.number;
  const measureStyle = theme === 'dark' ? styles.darkMeasure : styles.measure;
  const footer =
    number && measure ? (
      <View style={styles.footer}>
        <Text style={numberStyle}>{number}</Text>
        <Text style={measureStyle}>{measure}</Text>
      </View>
    ) : null;

  return (
    <TouchableOpacity style={{ ...rootStyle, ...customStyle }} onPress={onPress}>
      <View style={styles.header}>
        <Text style={titleStyle}>{title}</Text>
        {icon}
      </View>
      {children}

      {footer}
    </TouchableOpacity>
  );
};

export default FeatureLayout;
