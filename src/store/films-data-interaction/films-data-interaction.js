import {ActionType} from '../action';

import {adaptFilmsToClient, adaptPromoFilmToClient} from '../../components/server-data-adapter';
import {ALL_GENRES_FILTER} from '../../const/utils';
const initialState = {
  genre: ALL_GENRES_FILTER,
  filmList: [],
  reviews: [],
  promoFilm: {},
  favoriteFilms: [],
  isErrorCommentPosting: false,
  isFilmFavorite: false,
};

const filmsDataAndInteraction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APPLICATION_READY:
      return {
        ...state,
        isApplicationReady: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        filmList: adaptFilmsToClient(action.payload),
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_PROMOFILM:
      return {
        ...state,
        promoFilm: adaptPromoFilmToClient(action.payload),
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        genre: ALL_GENRES_FILTER
      };
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: adaptFilmsToClient(action.payload),
      };
    case ActionType.POST_FAVORITE_FILM:
      return {
        ...state,
        isFilmFavorite: action.payload,
      };
    case ActionType.CHECK_ERROR_COMMENT_POSTING:
      return {
        ...state,
        isErrorCommentPosting: action.payload,
      };
  }

  return state;
};

export {filmsDataAndInteraction};
