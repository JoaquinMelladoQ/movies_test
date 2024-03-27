import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useFilmsDetails} from './FilmsDetailsScreen.hooks';
import {LoaderComponent} from '../../../../common/components/loader/LoaderComponent';
import {DetailsContainer} from './FilmsDetailsScreen.presets';

export const FilmsDetailsScreen = ({route, navigation}) => {
  const {itemId, filmTitle, filmChar} = route?.params;
  const {characters, reset, idGenerator, isLoadingDetail} =
    useFilmsDetails(filmChar);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      reset(); // reset film characters
    });

    return unsubscribe; // cleanup
  }, [navigation, reset]);

  return (
    <View style={DetailsContainer.Overview}>
      <View style={DetailsContainer.Introduction}>
        <Text>{itemId}</Text>
        <Text>{filmTitle}</Text>
      </View>
      {isLoadingDetail ? (
        <LoaderComponent />
      ) : (
        <FlatList
          data={characters}
          renderItem={({item}) => (
            <View style={DetailsContainer.EveryItem}>
              <Text>Nombre: {item.name}</Text>
              <Text>Color de piel: {item.skin_color}</Text>
              <Text>Color de ojos: {item.eye_color}</Text>
            </View>
          )}
          keyExtractor={(_, index) => idGenerator(index.toString())}
        />
      )}
    </View>
  );
};
