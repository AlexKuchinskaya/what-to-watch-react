import {createSelector} from 'reselect';
import {getListOfGenres} from '../../utils/genre-list';
import {ALL_GENRES_FILTER} from '../../const/utils';
import {NameSpace} from '../root-reducer';

export const getFilmList = (state) => state[NameSpace.FILMS].filmList;
export const getAllGenresFromState = (state) => getListOfGenres(state[NameSpace.FILMS].filmList);
export const getCurrentGenreSelector = (state) => state[NameSpace.FILMS].genre;
export const getReviews = (state) => state[NameSpace.FILMS].reviews;
export const getPromoFilm = (state) => state[NameSpace.FILMS].promoFilm;
export const getIsFilmFavorite = (state) => state[NameSpace.FILMS].isFilmFavorite;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].favoriteFilms;
export const getIsErrorCommentPosting = (state) => state[NameSpace.FILMS].isErrorCommentPosting;

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

