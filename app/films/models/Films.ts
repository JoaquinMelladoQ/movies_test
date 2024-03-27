export interface Film {
  title: string;
  release_date: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  characters: string[];
}

export interface FilmProps {
  film: Film;
  onNavigate: (id: string, title: string, characters: string[]) => void;
}
