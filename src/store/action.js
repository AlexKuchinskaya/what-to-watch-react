import {MAX_FILMS} from "../const/utils";

export const ActionType = {
  CHANGE_GENRE: `films/changegenre`,
  GET_NEW_FILMLIST_BY_GENRE: `films/getnewfilmlistbygenre`,
  SHOW_MORE_MOVIES: `films/showmoremovies`,
  RESET_SHOW_MORE_MOVIES_BUTTON: `films/resetshowmoremoviesbutton`,
  RESET_GENRE: `films/resetgenre`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getNewFilmlistByGenre: () => ({
    type: ActionType.GET_NEW_FILMLIST_BY_GENRE,
  }),
  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: MAX_FILMS
  }),
  resetShowMoreMoviesButton: () => ({
    type: ActionType.RESET_SHOW_MORE_MOVIES_BUTTON,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  })
};
