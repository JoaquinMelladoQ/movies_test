import React, {FC} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {FilmListStyles} from './FilmsList.presets';
import {useFilmsList} from './FilmsListScreen.hooks';
import {ListComponent} from '../../../../common/components/list/ListComponent';
import {LoaderComponent} from '../../../../common/components/loader/LoaderComponent';

export const FilmsListScreen: FC<{navigation: any}> = ({navigation}) => {
  const {films, navigateToFilmDetail, isLoading} = useFilmsList(navigation);
  if (isLoading) {
    return <LoaderComponent size="large" color="#00ff00" />;
  }

  return (
    <SafeAreaView style={FilmListStyles.globalContainer}>
      <FlatList
        data={films}
        renderItem={({item}) => (
          <ListComponent film={item} onNavigate={navigateToFilmDetail} />
        )}
        keyExtractor={item => item.episode_id.toString()}
      />
    </SafeAreaView>
  );
};
