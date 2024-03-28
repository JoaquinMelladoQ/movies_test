import React from 'react';
import {View, Text} from 'react-native';

// TODO
export const PlanetList = (planets) => {
  return (
    <View>
      {Object.entries(planets)?.map(([id, planet]) => (
        <View key={id}>
          <Text>{planet?.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlanetList;

