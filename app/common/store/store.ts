import axios from 'axios';
import {create} from 'zustand';
import {FilmsState} from './interfaces';
import DEFAULTS from '../utils/config';
import {Path} from '../services/path';

export const useFilmStore = create<FilmsState>(set => ({
  films: [],
  fetchFilms: async () => {
    try {
      const response = await axios.get(
        `${DEFAULTS.apis.baseUrl}${Path.FILMS.FILMS_LIST}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        },
      );

      if (!DEFAULTS.mockProvider) {
	set({films: response.data.results});
      } else {
	// add mocking data to the store
      }
    } catch (error) {
      if (error.response) {
	// do nothing
      } else if (error.request) {
	// use this to debug
      } else {
	throw new Error('Catching an error', error.message);
      }
    }
  },
}));
