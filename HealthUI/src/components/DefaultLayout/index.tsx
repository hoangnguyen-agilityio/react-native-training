import React from 'react';
import { SafeAreaView } from 'react-native';
import style from './style';

const DefaultLayout = (props: any) => {
  return <SafeAreaView style={style.root} {...props} />;
};

export default DefaultLayout;
