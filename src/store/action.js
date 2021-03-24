export const ActionType = {
  CHANGE_GENRE: `films/changegenre`,
  RESET_GENRE: `films/resetgenre`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredauthorization`,
  LOAD_REVIEWS: `films/loadreviews`,
  LOAD_PROMOFILM: `promofilm/loadpromofilm`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  SET_APPLICATION_READY: `app/setApplicationReady`,
  CHECK_AUTHORIZATION: `user/checkauthorization`,
  CHECK_ERROR_COMMENT_POSTING: `comments/checkerrorcommentposting`,
  LOAD_USER_INFO: `user/loaduserinfo`,
  LOAD_FAVORITE_FILMS: `films/loadfavoritefilms`,
  POST_FAVORITE_FILM: `films/postfavoritefilm`
};

export const ActionCreator = {
  setApplicationReady: (isReady) => ({
    type: ActionType.SET_APPLICATION_READY,
    payload: isReady,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadPromoFilm: (promofilm) => ({
    type: ActionType.LOAD_PROMOFILM,
    payload: promofilm
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  checkAuthorization: (bool) => ({
    type: ActionType.CHECK_AUTHORIZATION,
    payload: bool,
  }),
  checkErrorCommentPost: (bool) => ({
    type: ActionType.CHECK_ERROR_COMMENT_POSTING,
    payload: bool,
  }),
  loadUserInfo: (userInfo) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: userInfo,
  }),
  loadFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms,
  }),
  postFavoriteFilm: (status) => ({
    type: ActionType.POST_FAVORITE_FILM,
    payload: status,
  }),
};
