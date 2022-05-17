import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../../components/HeaderLayout';
import COLORS from '../../constants/colors';
import styles from './styles';

const Home: FC = () => (
  <View>
    <Header textBg="Home">
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.headerTitle}>Hello Taylor,</Text>
          <Text style={styles.headerDesc}>Let’s Learn More About Plants</Text>
        </View>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>
    </Header>
    <Text>Home page</Text>
  </View>
);

export default Home;
