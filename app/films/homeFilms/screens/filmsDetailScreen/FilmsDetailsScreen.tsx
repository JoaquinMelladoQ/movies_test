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

    return unsubscribe;
  }, [navigation, reset]);

  return (
    <View style={DetailsContainer.Overview}>
      <View>
        <Text>{itemId}</Text>
        <Text>{filmTitle}</Text>
        <Text>Personajes: </Text>
      </View>
      {isLoadingDetail ? (
        <LoaderComponent />
      ) : (
        <FlatList
          data={characters}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => idGenerator(index.toString())}
        />
      )}
    </View>
  );
};
