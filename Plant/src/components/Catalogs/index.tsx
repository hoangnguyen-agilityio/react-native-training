import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CameraIcon from '../../assets/images/camera.svg';
import LeafIcon from '../../assets/images/leaf.svg';
import BookIcon from '../../assets/images/book.svg';
import styles from './styles';

const Catalogs: FC = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.catalogActive}>
        <CameraIcon width={21} height={21} style={{ marginBottom: 6 }} />
        <Text style={styles.textActive}>IDENTIFY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.catalog}>
        <LeafIcon
          width={27}
          height={27}
          style={{ marginTop: -3, marginBottom: 3 }}
        />
        <Text style={styles.text}>SPECIES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.catalog}>
        <BookIcon width={21} height={21} style={{ marginBottom: 6 }} />
        <Text style={styles.text}>ARTICLES</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Catalogs;
