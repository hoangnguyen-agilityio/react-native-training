import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  theme?: 'dark' | 'light';
  number?: string;
  measure?: string;
}

const UserBanner = (props: Props) => {
  const { title, theme, icon, children, number, measure } = props;
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
    <View style={rootStyle}>
      <View style={styles.header}>
        <Text style={titleStyle}>{title}</Text>
        {icon}
      </View>
      {children}

      {footer}
    </View>
  );
};

export default UserBanner;
