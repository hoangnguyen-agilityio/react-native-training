import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import AddIcon from '../../assets/add.svg';
import HomeIcon from '../../assets/home.svg';
import FrameIcon from '../../assets/frame.svg';
import DiscoveryIcon from '../../assets/discovery.svg';
import ProfileIcon from '../../assets/profile.svg';
import styles from './styles';
import IconButton from '../IconButton';

const AppBar = () => {
  return (
    <View style={styles.root}>
        <ImageBackground source={require('../../assets/tab-bar.png')} style={styles.appBarBg}>
					<View style={styles.iconGroup}>
						<HomeIcon />
						<FrameIcon />
					</View>
					<View style={styles.btnAdd}>
						<IconButton>
							<AddIcon />
						</IconButton>
					</View>
					<View style={styles.iconGroup}>
						<DiscoveryIcon />
						<ProfileIcon />
					</View>
				</ImageBackground>
    </View>
  );
};

export default AppBar;
