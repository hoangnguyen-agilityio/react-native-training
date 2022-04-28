import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  date: string;
  avatarUrl: ImageSourcePropType;
}

const UserBanner = (props: Props) => {
  const { title, date, avatarUrl } = props;

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Image style={styles.avatar} source={avatarUrl} />
    </View>
  );
};

export default UserBanner;
