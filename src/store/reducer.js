import {AuthorizationStatus, MAX_FILMS} from "../const/utils";
import {ActionType} from "./action";
import {adaptFilmsToClient, adaptPromoFilmToClient} from '../components/server-data-adapter';

const initialState = {
  genre: `All genres`,
  filmList: [],
  filmsShownCount: MAX_FILMS,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoading: false,
  isReviewsLoading: false,
  reviews: [],
  promoFilm: {},
  isPromoFilmLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_NEW_FILMLIST_BY_GENRE:
      return {
        ...state,
        filmList: state.filmList
      };
    case ActionType.SHOW_MORE_MOVIES:
      return {
        ...state,
        filmsShownCount: state.filmsShownCount + action.payload
      };
    case ActionType.RESET_SHOW_MORE_MOVIES_BUTTON:
      return {
        ...state,
        filmsShownCount: MAX_FILMS,
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        genre: `All genres`
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        filmList: adaptFilmsToClient(action.payload),
        isDataLoading: true
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
        isReviewsLoading: true,
      };
    case ActionType.LOAD_PROMOFILM:
      return {
        ...state,
        promoFilm: adaptPromoFilmToClient(action.payload),
        isPromoFilmLoading: true,
      };
    default:
      return state;
  }

};

export {reducer};