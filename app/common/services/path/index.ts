export const Path = {
  FILMS: {
    FILMS_LIST: '/films',
    FILMS_BY_ID: (id: string) => `/films/${id}/`,
  },
  PEOPLE: {
    PEOPLE_LIST: '/people',
    PEOPLE_BY_ID: (id: string) => `/people/${id}/`,
  },
  PLANETS: {
    PLANET_LIST: '/planets',
    PLANET_BY_ID: (id: string) => `/planet/${id}/`,
  },
  SPECIES: {
    SPECIES_LIST: '/species',
  },
  STARSHIPS: {
    STARSHIPS_LIST: '/starships',
  },
  VEHICLES: {
    VEHICLES_LIST: '/vehicles',
  },
};
