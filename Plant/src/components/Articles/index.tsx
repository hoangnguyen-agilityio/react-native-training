import React, { FC } from 'react';
import { View } from 'react-native';
import ArticleItem from './ArticleItem';
import styles from './styles';

interface Props {
  handleRedirectToDetailPage: () => void
}

const ArticleList:FC<Props> = ({ handleRedirectToDetailPage }) => {
  return (
    <View style={styles.root}>
      {DATA.map(article => (
        <ArticleItem data={article} onPress={handleRedirectToDetailPage} />
      ))}
    </View>
  );
};

const DATA = [
  {
    image: require('../../assets/images/article-1.png'),
    title: 'David Austin, Who Breathed Life Into the Rose, Is Dead at 92',
    date: '2019 . 01 . 01',
    author: {
      avatar: require('../../assets/images/article-author.png'),
      name: 'Shivani Vora',
    },
  },
  {
    image: require('../../assets/images/article-2.png'),
    title: "Even on Urban Excursions, Finding Mother Nature's Charms",
    date: '2019 . 01 . 01',
    author: {
      avatar: require('../../assets/images/article-author.png'),
      name: 'Shivani Vora',
    },
  },
];

export default ArticleList;
