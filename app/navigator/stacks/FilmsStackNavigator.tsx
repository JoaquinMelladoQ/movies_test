import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FilmsListScreen} from '../../films/homeFilms/screens/filmsListScreen/FilmsListScreen';
import {FilmsDetailsScreen} from '../../films/homeFilms/screens/filmsDetailScreen/FilmsDetailsScreen';

const Stack = createNativeStackNavigator();

export const FilmsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListScreen">
      <Stack.Screen
        name="FilmsListScreen"
        component={FilmsListScreen}
        options={{title: 'Films'}}
      />
      <Stack.Screen
        name="FilmsDetailsScreen"
        component={FilmsDetailsScreen}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};
