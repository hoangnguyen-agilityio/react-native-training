import React from 'react';
import { TouchableHighlight } from 'react-native';
import style from './styles';

const IconButton = (props: any) => {
  return <TouchableHighlight style={style.button} {...props} />;
};

export default IconButton;
