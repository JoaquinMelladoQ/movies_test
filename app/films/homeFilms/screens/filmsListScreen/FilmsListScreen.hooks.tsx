import {useFilmStore} from '../../../../common/store/store';
import {Character} from '../../../models/Films';

export const useFilmsList = (navigation: any) => {
  const {films, loading} = useFilmStore();
  const navigateToFilmDetail = (
    id: string,
    title: string,
    characters: Character[],
  ) => {
    const film = films.find(filmItem => filmItem.episode_id.toString() === id);
    if (!film) {
      // return an error screen
      return;
    }
    navigation.navigate('FilmsDetailsScreen', {
      itemId: id,
      filmTitle: title,
      filmChar: characters,
      filmPlanet: film.planets, // TODO
    });
  };
  return {
    films,
    navigateToFilmDetail,
    isLoading: loading,
  };
};
