import {create} from 'zustand';
import {FilmsState} from './interfaces';
import {fetchFilms} from './fetchFilms';
import {fetchFilmDetail} from './fetchFilmDetail';

export const useFilmStore = create<FilmsState>((set, get) => ({
  films: [],
  characters: {},
  loading: false,
  setLoading: loading => set({loading}),
  resetCharacters: () => set({characters: {}}),
  fetchFilms: () => fetchFilms(set),
  fetchFilmDetail: id => fetchFilmDetail(id, set, get),
}));
