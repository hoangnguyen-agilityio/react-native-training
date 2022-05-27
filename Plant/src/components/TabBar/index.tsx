import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useContext } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from '../../assets/images/home.svg';
import ProfileIcon from '../../assets/images/profile.svg';
import AddIcon from '../../assets/images/add.svg';
import COLORS from '../../constants/colors';
import { NavigationListType } from '../../constants/navigationList';
import IconButton from '../IconButton';
import styles from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { routes } = state;

  const onPress = (screen: keyof NavigationListType, index: number) => {
    const route = routes?.find(route => route.name === screen);
    const event = navigation.emit({
      type: 'tabPress',
      target: route?.key,
      canPreventDefault: true,
    });

    if (index !== state.index && !event.defaultPrevented && route?.name) {
      navigation.navigate({ name: route?.name, params: { merge: true } });
    }
  };

  const getColor = (index: number): string =>
    index === state.index ? COLORS.GREEN : COLORS.GRAY;

  return (
    <ImageBackground
      source={require('../../assets/images/tab-bar.png')}
      style={styles.root}
      resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.col}>
          <TouchableOpacity
            style={styles.center}
            onPress={() => onPress('Home', 0)}>
            <HomeIcon width={25} height={25} color={getColor(0)} />
            <Text style={[styles.label, { color: getColor(0) }]}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.col, { marginBottom: 36 }]}>
          <IconButton color="#48A2F5">
            <AddIcon />
          </IconButton>
        </View>
        <View style={styles.col}>
          <TouchableOpacity
            style={styles.center}
            onPress={() => onPress('Profile', 1)}>
            <ProfileIcon width={25} height={25} color={getColor(1)} />
            <Text style={[styles.label, { color: getColor(1) }]}>PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TabBar;
