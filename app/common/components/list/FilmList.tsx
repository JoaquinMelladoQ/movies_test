import React, {FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import {FilmListStyles} from './FilmList.presets';

interface FilmItem {
  name: string;
}

interface FilmListProps {
  items: FilmItem[];
  idGenerator: (index: string) => string;
}

export const FilmList: FC<FilmListProps> = ({items, idGenerator}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View style={FilmListStyles.EveryItem}>
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={(_, index) => idGenerator(index.toString())}
    />
  );
};
