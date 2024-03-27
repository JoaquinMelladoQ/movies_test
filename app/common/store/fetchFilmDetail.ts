import axios from 'axios';
import {Path} from '../services/path';
import DEFAULTS from '../utils/config';

export const fetchFilmDetail = async (id, set, get) => {
  const currentCharacters = get().characters;
  if (currentCharacters[id]) {
    return;
  }
  set({loading: true});
  try {
    const response = await axios.get(
      `${DEFAULTS.apis.baseUrl}${Path.PEOPLE.PEOPLE_BY_ID(id)}`,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    if (!DEFAULTS.mockProvider) {
      set(state => ({
        characters: {...state.characters, [id]: response.data},
      }));
    } else {
      // options to test mocking data to the store
    }
  } catch (error) {
    console.error('fetching details:', error.message);
  } finally {
    set({loading: false});
  }
};
