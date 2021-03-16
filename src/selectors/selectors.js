import {createSelector} from 'reselect';
import {getListOfGenres} from '../utils/genre-list';
import {ALL_GENRES_FILTER} from '../const/utils';

export const getFilmList = (state) => state.filmList;
export const getAllGenresFromState = (state) => getListOfGenres(state.filmList);
export const getCurrentGenreSelector = (state) => state.genre;
const filmsSelector = (state) => state.films;
// const filterSelector = (state) => state.filter;
export const getFilteredFilms = (films, genre) => films.filter((film) => film.genre === genre);
const filterMoviesByGenre = createSelector(
    getFilmList,
    getCurrentGenreSelector,
    (films, genre) => {
      console.log(`films`, films);
      console.log(`genre`, genre);
      return (genre === ALL_GENRES_FILTER) ?
        films :
        films.filter((film) => film.genre === genre);
    }
);

export {filterMoviesByGenre};

