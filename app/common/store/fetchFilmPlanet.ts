import axios from 'axios';
import {Path} from '../services/path';
import DEFAULTS from '../utils/config';
import {Planet} from '../../films/models/Films';

export const fetchFilmPlanet = async (planetId: string, set, get) => {
  const currentPlanets = get().planets;
  if (currentPlanets[planetId]) {
    return;
  }
  set({loading: true});
  try {
    const response = await axios.get<Planet>(
      `${DEFAULTS.apis.baseUrl}${Path.PLANETS.PLANET_BY_ID(planetId)}`,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );
    set(state => ({
      planets: {...state.planets, [planetId]: response.data},
      loading: false,
    }));
  } catch (error: unknown) {
    // add an error screen for example
  } finally {
    set({loading: false});
  }
};
