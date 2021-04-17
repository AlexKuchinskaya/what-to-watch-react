export const ActionType = {
  CHANGE_GENRE: `films/changegenre`,
  RESET_GENRE: `films/resetgenre`,
  LOAD_FILMS: `films/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredauthorization`,
  LOAD_REVIEWS: `films/loadreviews`,
  LOAD_PROMOFILM: `film/loadpromofilm`,
  SET_APPLICATION_READY: `app/setApplicationReady`,
  CHECK_AUTHORIZATION: `user/checkauthorization`,
  CHECK_ERROR_COMMENT_POSTING: `films/checkerrorcommentposting`,
  LOAD_USER_INFO: `user/loaduserinfo`,
  LOAD_FAVORITE_FILMS: `films/loadfavoritefilms`,
  POST_FAVORITE_FILM: `films/postfavoritefilm`
};

export const setApplicationReady = (isReady) => ({
  type: ActionType.SET_APPLICATION_READY,
  payload: isReady,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadPromoFilm = (promofilm) => ({
  type: ActionType.LOAD_PROMOFILM,
  payload: promofilm
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadUserInfo = (userInfo) => ({
  type: ActionType.LOAD_USER_INFO,
  payload: userInfo,
});

export const loadFavoriteFilms = (favoriteFilms) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms,
});

export const checkAuthorization = (bool) => ({
  type: ActionType.CHECK_AUTHORIZATION,
  payload: bool,
});

export const postFavoriteFilm = (status) => ({
  type: ActionType.POST_FAVORITE_FILM,
  payload: status,
});

export const checkErrorCommentPost = (bool) => ({
  type: ActionType.CHECK_ERROR_COMMENT_POSTING,
  payload: bool,
});

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const resetGenre = () => ({
  type: ActionType.RESET_GENRE,
});
