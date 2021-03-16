import {ALL_GENRES_FILTER} from '../const/utils';

export const getListOfGenres = (films) => {
  return [ALL_GENRES_FILTER, ...new Set(films.map((film) => film.genre))];
};
