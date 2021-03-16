import {createSelector} from 'reselect';
import {getListOfGenres} from '../utils/genre-list';
import {ALL_GENRES_FILTER} from '../const/utils';

export const getFilmList = (state) => state.filmList;
export const getPromofilm = (state) => state.promoFilmMock;
export const getAllGenresFromState = (state) => getListOfGenres(state.filmList);
export const getCurrentGenreSelector = (state) => state.genre;
export const getCurrentFilmsShownCount = (state) => state.filmsShownCount;

const filterMoviesByGenre = createSelector(
    getFilmList,
    getCurrentGenreSelector,
    (films, genre) => {
      return (genre === ALL_GENRES_FILTER) ?
        films :
        films.filter((film) => film.genre === genre);
    }
);

export {filterMoviesByGenre};

