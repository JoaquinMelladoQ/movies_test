import {extractIdFromUrl} from './regex';

describe('extractIdFromUrl should work properly', () => {
  it('should extract the id from a url', () => {
    const url = 'https://swapi.dev/api/people/1/';
    expect(extractIdFromUrl(url)).toBe('1');
  });

  it('should return null for urls without an id at the end', () => {
    const url = 'https://swapi.dev/api/people/';
    expect(extractIdFromUrl(url)).toBeNull();
  });

  it('should return null for invalid urls', () => {
    const url = 'https://swapi.dev/api/people/name/luke';
    expect(extractIdFromUrl(url)).toBeNull();
  });
});
