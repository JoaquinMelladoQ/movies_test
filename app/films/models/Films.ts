export interface FilmDetail {
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

export interface Character {
  name: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Film {
  title: string;
  release_date: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  characters: Character[];
  planets: Planet[];
}

export interface FilmProps {
  film: Film;
  onNavigate: (
    id: string,
    title: string,
    characters: Character[],
    planets: Planet[],
  ) => void;
}
