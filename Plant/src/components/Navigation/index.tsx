import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import BackIcon from '../../assets/images/back.svg';
import ACtionIcon from '../../assets/images/action.svg';
import styles from './styles';

interface Props {
  handleBack: () => void;
}

const Navigation: FC<Props> = ({ handleBack }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => handleBack()}>
        <BackIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <ACtionIcon width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
