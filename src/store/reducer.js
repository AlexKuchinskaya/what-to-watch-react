import {ALL_GENRES_FILTER, AuthorizationStatus} from "../const/utils";
import {ActionType} from "./action";
import {adaptFilmsToClient, adaptPromoFilmToClient, adaptUserLoggedInInfo} from '../components/server-data-adapter';

const initialState = {
  genre: ALL_GENRES_FILTER,
  filmList: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isApplicationReady: false,
  isErrorAuthorization: false,
  isErrorCommentPosting: false,
  reviews: [],
  promoFilm: {},
  userLoggedInInfo: {},
  favoriteFilms: [],
  isFilmFavorite: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APPLICATION_READY:
      return {
        ...state,
        isApplicationReady: action.payload,
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        filmList: adaptFilmsToClient(action.payload),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
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
    case ActionType.CHECK_AUTHORIZATION:
      return {
        ...state,
        isErrorAuthorization: action.payload,
      };
    case ActionType.CHECK_ERROR_COMMENT_POSTING:
      return {
        ...state,
        isErrorCommentPosting: action.payload,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        userLoggedInInfo: adaptUserLoggedInInfo(action.payload),
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
    default:
      return state;
  }

};

export {reducer};
