import {useFilmStore} from '../../../../common/store/store';

export const useFilmsList = (navigation: any) => {
  const {films, loading} = useFilmStore();
  const navigateToFilmDetail = (
    id: string,
    title: string,
    characters: string[],
  ) => {
    navigation.navigate('FilmsDetailsScreen', {
      itemId: id,
      filmTitle: title,
      filmChar: characters,
    });
  };
  return {
    films,
    navigateToFilmDetail,
    isLoading: loading,
  };
};
