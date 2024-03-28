import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {FilmListStyles} from './FilmsList.presets';
import {useFilmsList} from './FilmsListScreen.hooks';
import {PressableCard} from '../../../../common/components/card/PressableCard';
import {LoaderComponent} from '../../../../common/components/loader/LoaderComponent';

export const FilmsListScreen = ({navigation}) => {
  const {films, navigateToFilmDetail, isLoading} = useFilmsList(navigation);
  if (isLoading) {
    return <LoaderComponent size="large" color="#00ff00" />;
  }

  return (
    <SafeAreaView style={FilmListStyles.globalContainer}>
      <FlatList
        data={films}
        renderItem={({item}) => (
          <PressableCard film={item} onNavigate={navigateToFilmDetail} />
        )}
        keyExtractor={item => item.episode_id.toString()}
      />
    </SafeAreaView>
  );
};
