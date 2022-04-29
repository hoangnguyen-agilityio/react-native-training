import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  theme?: 'dark' | 'light';
  number?: string;
  measure?: string;
  customStyle?: object;
}

const Wrapper = (props: any) => {
  if (0 === 0) {
    return <View {...props} />;
  }

  return <View {...props} />;
};

const FeatureLayout = (props: Props) => {
  const {
    title,
    theme,
    icon,
    children = null,
    number,
    measure,
    customStyle = {},
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
    <Wrapper style={{ ...rootStyle, ...customStyle }}>
      <View style={styles.header}>
        <Text style={titleStyle}>{title}</Text>
        {icon}
      </View>
      {children}

      {footer}
    </Wrapper>
  );
};

export default FeatureLayout;
