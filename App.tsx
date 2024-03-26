import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import * as FilmsData from './app/common/data/films.json';
import {useFilmStore} from './app/common/store/store';

function App(): React.JSX.Element {
  const {films, fetchFilms} = useFilmStore();

  const CharacterInnerList = ({name}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    );
  };

  const FilmsGlobalList = ({title, episode_id, release_date, characters}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>Episode: {episode_id}</Text>
      <Text>Release Date: {release_date}</Text>
      <FlatList
        data={characters}
        renderItem={({item}) => <CharacterInnerList name={item.name} />}
      />
    </View>
  );

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={films}
        renderItem={({item}) => (
          <FilmsGlobalList
            title={item.title}
            episode_id={item.episode_id}
            release_date={item.release_date}
            characters={item.characters}
          />
        )}
        keyExtractor={item => item.episode_id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
