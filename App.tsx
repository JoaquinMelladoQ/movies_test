import React, {useEffect} from 'react';
// import * as FilmsData from './app/common/data/films.json';
import {useFilmStore} from './app/common/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {FilmsStackNavigator} from './app/navigator/stacks/FilmsStackNavigator';

function App(): React.JSX.Element {
  const {fetchFilms} = useFilmStore();

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <NavigationContainer>
      <FilmsStackNavigator />
    </NavigationContainer>
  );
}
export default App;
