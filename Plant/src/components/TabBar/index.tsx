import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useContext } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from '../../assets/images/home.svg';
import ProfileIcon from '../../assets/images/profile.svg';
import AddIcon from '../../assets/images/add.svg';
import COLORS from '../../constants/colors';
import { NavigationListType } from '../../constants/navigationList';
import { CurrentPageContext } from '../../contexts/currentPage';
import IconButton from '../IconButton';
import styles from './styles';

const TabBar: FC = () => {
  const [activeScreen, setActiveScreen] = useContext(CurrentPageContext);
  const navigation: NativeStackNavigationProp<NavigationListType> =
    useNavigation();

  const onPressIcon = (screen: keyof NavigationListType) => {
    setActiveScreen({
      ...activeScreen,
      currentPage: screen,
    });

    if (screen === 'Profile') {
      navigation.navigate(screen);
    } else {
      navigation.navigate(activeScreen.currentHomePage);
    }
  };

  const getColor = (screen: keyof NavigationListType): string =>
    screen === activeScreen?.currentPage ? COLORS.GREEN : COLORS.GRAY;

  return (
    <ImageBackground
      source={require('../../assets/images/tab-bar.png')}
      style={styles.root}
      resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.col}>
          <TouchableOpacity
            style={styles.center}
            onPress={() => onPressIcon('Home')}>
            <HomeIcon width={25} height={25} color={getColor('Home')} />
            <Text style={[styles.label, { color: getColor('Home') }]}>
              HOME
            </Text>
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
            onPress={() => onPressIcon('Profile')}>
            <ProfileIcon width={25} height={25} color={getColor('Profile')} />
            <Text style={[styles.label, { color: getColor('Profile') }]}>
              PROFILE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TabBar;
