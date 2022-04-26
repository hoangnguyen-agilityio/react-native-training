import React from 'react';
import {StyleSheet, View} from 'react-native';

const Section = (props: any) => <View style={styles.section} {...props} />;

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
    paddingVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
});

export default Section;
