import {createSelector} from 'reselect';
import {getListOfGenres} from '../utils/genre-list';
import {ALL_GENRES_FILTER} from '../const/utils';

export const getFilmList = (state) => state.filmList;
export const getAllGenresFromState = (state) => getListOfGenres(state.filmList);
export const getCurrentGenreSelector = (state) => state.genre;

const filterMoviesByGenre = createSelector(
    getFilmList,
    getCurrentGenreSelector,
    (films, genre) => {
      return (genre === ALL_GENRES_FILTER) ?
        films :
        films.filter((film) => film.genre === genre);
    }
);

export const getSelectedFilm = (state, filmId) => {
  const films = getFilmList(state);
  if (filmId <= films.length) {
    return films.find((film) => film.id === filmId);
  }
  return null;
};


export {filterMoviesByGenre};

