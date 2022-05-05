import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../GradientText';
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
  linearGradientColors?: string[];
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
    linearGradientColors = [],
  } = props;
  const rootStyle = theme === 'dark' ? styles.darkRoot : styles.root;
  const titleStyle = theme === 'dark' ? styles.darkTitle : styles.title;
  const numberStyle = theme === 'dark' ? styles.darkNumber : styles.number;
  const measureStyle = theme === 'dark' ? styles.darkMeasure : styles.measure;
  const footer =
    number && measure ? (
      theme === 'dark' ? (
        <View style={styles.footer}>
          <Text style={numberStyle}>{number}</Text>
          <Text style={measureStyle}> {measure}</Text>
        </View>
      ) : (
        <View style={styles.footer}>
          <GradientText>
            <Text style={numberStyle}>{number}</Text>
            <Text style={measureStyle}> {measure}</Text>
          </GradientText>
        </View>
      )
    ) : null;

  if (linearGradientColors.length) {
    return (
      <TouchableOpacity
        style={{ ...rootStyle, ...customStyle }}
        onPress={onPress}>
        <LinearGradient
          colors={linearGradientColors}
          style={styles.gradientWrapper}>
          <View style={styles.header}>
            <Text style={titleStyle}>{title}</Text>
            {icon}
          </View>
          {children}

          {footer}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{ ...rootStyle, ...customStyle }}
      onPress={onPress}>
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
