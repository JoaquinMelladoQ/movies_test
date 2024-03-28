import {useEffect, useState} from 'react';
import {useFilmStore} from '../../../../common/store/store';
import {extractIdFromUrl} from '../../../../common/utils/regex';
import {generateUniqueId} from '../../../../common/utils/format';

export const useFilmsDetails = (filmChar: string[], filmPlanet: string[]) => {
  const {fetchFilmDetail, characters, resetCharacters, loading} =
    useFilmStore();
  const [isCharacterVisible, setCharacterVisibility] = useState<boolean>(false);
  const [isVisiblePlanet, setPlanetVisibility] = useState<boolean>(false);
  // const extractedPlanetdId = filmPlanet?.map((everyPlanet: string) =>
  //   extractIdFromUrl(everyPlanet),
  //   // TODO: use the ID to make the planet's request
  // );
  const onChangeCharacters = () => setCharacterVisibility(!isCharacterVisible);
  const onChangePlanets = () => setPlanetVisibility(!isVisiblePlanet);
  useEffect(() => {
    const fetchDetails = async () => {
      await Promise.all(
        filmChar.map(url => {
          const id = extractIdFromUrl(url); // taking the id from url
          return fetchFilmDetail(id); // request from store
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
    isCharacterVisible,
    onChangeCharacters,
    isVisiblePlanet,
    onChangePlanets,
  };
};
