import React, { FC, ReactNode } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  textBg: string;
  children: ReactNode
}

const Header: FC<Props> = ({ textBg, children }) => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../assets/images/header-bg.png')}
        resizeMode="cover"
        style={styles.bg}>
        <View style={styles.firstEllipse} />
        <View style={styles.secondEllipse} />
        <Text style={styles.textBg}>{textBg}</Text>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Header;
