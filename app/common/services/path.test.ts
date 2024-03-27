import {Path} from '../services/path';

describe('Path Configuration', () => {
  it('should gen proper path for FILMS_LIST', () => {
    expect(Path.FILMS.FILMS_LIST).toBe('/films');
  });

  it('should gen proper path for PEOPLE_LIST', () => {
    expect(Path.PEOPLE.PEOPLE_LIST).toBe('/people');
  });

  it('should gen proper path for FILMS_BY_ID', () => {
    const id = '1';
    expect(Path.FILMS.FILMS_BY_ID(id)).toBe(`/films/${id}/`);
  });

  it('should gen proper path for PEOPLE_BY_ID', () => {
    const id = '2';
    expect(Path.PEOPLE.PEOPLE_BY_ID(id)).toBe(`/people/${id}/`);
  });
});
