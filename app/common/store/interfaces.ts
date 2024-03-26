export interface Character {
  name: string;
}

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  characters: Character[];
}

export interface FilmsState {
  films: Film[];
  fetchFilms: () => Promise<void>;
}
