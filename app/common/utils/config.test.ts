import DEFAULTS from './config';

describe('DEFAUTLS configs bulding the requests', () => {
  it('should contain the correct API baseUrl', () => {
    expect(DEFAULTS.apis.baseUrl).toBe('https://swapi.dev/api');
  });

  it('should have mockProvider set to false', () => {
    expect(DEFAULTS.mockProvider).toBe(false);
  });
});
