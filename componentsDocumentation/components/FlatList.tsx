import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DATA: { id: string; title: string }[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

interface Item {
  id: string;
  title: string;
}

interface RenderItem {
  item: Item;
}

interface Props {
  item: Item;
  onPress: () => any;
  backgroundColor: {
    backgroundColor: string;
  };
  textColor: {
    color: string;
  };
}

const Item = ({ item, onPress, backgroundColor, textColor }: Props) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Flatlist = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderItem = ({ item }: RenderItem) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Flatlist;
