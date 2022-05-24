import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import HeartIcon from '../../assets/images/heart.svg';
import BookMarkIcon from '../../assets/images/book-mark.svg';
import styles from './styles';

interface Props {
  data: {
    image: any;
    title: string;
    date: string;
    author: {
      avatar: any;
      name: string;
    };
  };
}

const ArticleItem: FC<Props> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.itemWrap}>
      <Image source={data.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={[styles.row, styles.authorWrap]}>
          <View style={styles.row}>
            <Image source={data.author.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.author}>{data.author.name}</Text>
              <Text style={styles.date}>{data.date}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <BookMarkIcon width={16} height={16} />
            <HeartIcon width={19} height={19} style={styles.heartIcon} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleItem;
