import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import IconButton from '../../components/IconButton';
import ArrowIcon from '../../assets/right-arrow.svg';
import styles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationListType } from '../../constants/navigationList';

interface Props {
  navigation: NativeStackNavigationProp<NavigationListType, 'Onboarding'>;
}

const Onboarding = ({ navigation }: Props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.main}>
      <Image
        source={require('../../assets/onboarding.png')}
        style={styles.illu}
      />
      <Text style={styles.title}>Your body need water</Text>
      <Text style={styles.desc}>
        Track your daily water intake in just a few taps!
      </Text>
    </View>
    <View style={styles.cta}>
      <AnimatedCircularProgress
        size={72}
        rotation={-216}
        width={7}
        fill={60}
        tintColor="#E5DEF2"
        backgroundColor="#FFFFFF">
        {fill => (
          <IconButton onPress={() => navigation.navigate('Home')}>
            <ArrowIcon />
          </IconButton>
        )}
      </AnimatedCircularProgress>
    </View>
  </SafeAreaView>
);

export default Onboarding;
