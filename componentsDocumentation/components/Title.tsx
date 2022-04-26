import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = (props: any) => <Text style={styles.title} {...props} />;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default Title;
