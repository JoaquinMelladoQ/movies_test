import {Film, FilmDetail, Planet} from '../../films/models/Films';

export interface FilmsState {
  films: Film[];
  characters: {[id: string]: FilmDetail};
  planets: {[id: string]: Planet};
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  fetchFilmDetail: (id: string) => Promise<void>;
  fetchFilms: () => Promise<void>;
  resetCharacters: () => void;
  fetchFilmPlanet: (id: string) => Promise<void>;
}
