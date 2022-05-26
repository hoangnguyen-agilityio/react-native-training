import React, { FC, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import style from './styles';

interface Props {
  color: string;
  children: ReactNode;
  onPress?: () => void;
  shadow?: boolean;
}

const IconButton: FC<Props> = ({
  color,
  children,
  onPress = () => {},
  shadow = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        style.button,
        shadow ? styles.shadow : null,
        { backgroundColor: color },
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
