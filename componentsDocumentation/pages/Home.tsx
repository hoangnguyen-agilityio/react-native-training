import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button, View } from 'react-native';
import { ComponentListType, COMPONENT_LIST } from '../configs/componentList';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Item {
  item: {
    page: keyof ComponentListType;
    title: string;
    id: string;
  };
}

interface IPdpPageProps {
  navigation: NativeStackNavigationProp<ComponentListType, 'Home'>;
}

const HomePage = ({ navigation }: IPdpPageProps) => {
  const Item = ({ item }: Item) => (
    <View style={styles.listItem}>
      <Button
        onPress={() => navigation.navigate(item.page, { name: item.title })}
        title={item.title}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={COMPONENT_LIST}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listItem: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
});

export default HomePage;
