import React, {FC, memo} from 'react';
import {Pressable, View, Text} from 'react-native';
import {FilmProps} from '../../../films/models/Films';
import {formatDate} from '../../utils/format';
import {ListComponentStyles} from './ListComponent.presets';

export const ListComponent: FC<FilmProps> = memo(({film, onNavigate}) => (
  <Pressable
    onPress={() =>
      onNavigate(film.episode_id.toString(), film.title, film.characters)
    }>
    <View style={ListComponentStyles.pressableContainer}>
      <Text style={ListComponentStyles.title}>{film.title}</Text>
      <Text>Release Date: {formatDate(film.release_date)}</Text>
      <Text>Director: {film.director}</Text>
      <Text>Episode: {film.episode_id}</Text>
      <Text>Resumen: {`\n"${film.opening_crawl}"`}</Text>
    </View>
  </Pressable>
));
