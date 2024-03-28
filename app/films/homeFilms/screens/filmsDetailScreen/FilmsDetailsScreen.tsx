import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useFilmsDetails} from './FilmsDetailsScreen.hooks';
import {LoaderComponent} from '../../../../common/components/loader/LoaderComponent';
import {DetailsContainer} from './FilmsDetailsScreen.presets';
import {ButtonPressable} from '../../../../common/components/button/ButtonPressable';
import {FilmList} from '../../../../common/components/list/FilmList';

export const FilmsDetailsScreen = ({route, navigation}) => {
  const {filmTitle, filmChar, filmPlanet} = route?.params;
  const {
    characters,
    reset,
    idGenerator,
    isLoadingDetail,
    onChangeCharacters,
    isCharacterVisible,
    onChangePlanets,
    isVisiblePlanet,
  } = useFilmsDetails(filmChar, filmPlanet);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      reset(); // reset film characters
    });

    return unsubscribe; // cleanup
  }, [navigation, reset]);

  return (
    <SafeAreaView style={DetailsContainer.Overview}>
      <View style={DetailsContainer.Introduction}>
        <Text style={DetailsContainer.Text}>{filmTitle}</Text>
      </View>
      {isLoadingDetail ? (
        <LoaderComponent />
      ) : (
        <>
          <ButtonPressable
            onPress={() => onChangeCharacters()}
            isVisible={isCharacterVisible}
            textVisible="Ocultar Personajes"
            textInvisible="Ver Personajes"
          />
          {isCharacterVisible && (
            <FilmList items={characters} idGenerator={idGenerator} />
          )}
          <ButtonPressable
            onPress={() => onChangePlanets()}
            isVisible={isVisiblePlanet}
            textVisible="Ocultar Planetas"
            textInvisible="Ver Planetas"
          />
	  {/* TODO section */}
          {isVisiblePlanet && (
            <View>
              {filmPlanet?.map((everyPlanet: string, index: number) => (
                <View key={idGenerator(index.toString())}>
                  <Text>{everyPlanet}</Text>
                </View>
              ))}
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};
