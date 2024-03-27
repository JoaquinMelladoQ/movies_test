import {useEffect} from 'react';
import {useFilmStore} from '../../../../common/store/store';
import {extractIdFromUrl} from '../../../../common/utils/regex';
import {generateUniqueId} from '../../../../common/utils/format';

export const useFilmsDetails = (filmChar: string[]) => {
  const {fetchFilmDetail, characters, resetCharacters, loading} =
    useFilmStore();

  useEffect(() => {
    const fetchDetails = async () => {
      await Promise.all(
        filmChar.map(url => {
          const id = extractIdFromUrl(url);
          return fetchFilmDetail(id);
        }),
      );
    };

    fetchDetails();
  }, [filmChar, fetchFilmDetail]);

  return {
    isLoadingDetail: loading,
    characters: Object.values(characters),
    idGenerator: generateUniqueId,
    reset: resetCharacters,
  };
};
