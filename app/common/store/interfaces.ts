export interface Character {
  name: string;
}

export interface Film {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  characters: Character[];
}

interface FilmDetail {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'male' | 'female' | 'n/a';
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmsState {
  films: Film[];
  characters: {[id: string]: FilmDetail};
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  fetchFilmDetail: (id: string) => Promise<void>;
  fetchFilms: () => Promise<void>;
  resetCharacters: () => void;
}
