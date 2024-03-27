import axios from 'axios';
import DEFAULTS from '../utils/config';
import {Path} from '../services/path';

export const fetchFilms = async set => {
  set({loading: true});
  try {
    const response = await axios.get(
      `${DEFAULTS.apis.baseUrl}${Path.FILMS.FILMS_LIST}`,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    if (!DEFAULTS.mockProvider) {
      set({films: response.data.results});
    } else {
      // add mocking data to the store
    }
  } catch (error) {
    console.error('Error fetching films:', error.message);
  } finally {
    set({loading: false});
  }
};
