import browserHistory from '../browser-history';
import {AuthorizationStatus} from '../const/utils';
import {APIRoute, FILMS_PATH, Routes} from './../const/routes-path';
import {setApplicationReady, loadFilms, loadPromoFilm, loadReviews, requireAuthorization, loadUserInfo, loadFavoriteFilms, checkAuthorization, postFavoriteFilm, checkErrorCommentPost} from './action';


export const initApp = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS).then(({data}) => {
    dispatch(checkAuth());
    dispatch(loadFilms(data));
    dispatch(fetchPromoFilm()).then(() => {
      dispatch(setApplicationReady(true));
    });
  });
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM_PROMO)
    .then(({data}) => dispatch(loadPromoFilm((data))))
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => dispatch(loadFavoriteFilms((data))))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)));


export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(Routes.LOG_IN)
    .then(({data}) => dispatch(loadUserInfo(data)))
    .then(() =>{
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Routes.LOG_IN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(checkAuthorization(false)))
    .then(() => dispatch(fetchUserLoggedInInfo()))
    .then(() => browserHistory.goBack())
    .catch((error) => {
      dispatch(checkAuthorization(true));
      throw error;
    })
);


export const fetchUserLoggedInInfo = () => (dispatch, _getState, api) =>
  api
    .get(Routes.LOG_IN)
    .then(({data}) => dispatch(loadUserInfo(data)));

export const addReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  return api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
   .then(() => {
     dispatch(checkErrorCommentPost(false));
     dispatch(fetchReviewList(id));
     browserHistory.push(`/${FILMS_PATH}/${id}`);
   })
    .catch((error) => {
      dispatch(checkErrorCommentPost(true));

      throw error;
    });
};

export const addNewFavoriteFilm = (id, isFilmFavorite) => (dispatch, _getState, api) => {
  const status = isFilmFavorite ? 1 : 0;
  dispatch(postFavoriteFilm(true));
  return api.post(`/favorite/${id}/${status}`)
   .then(() => {
     dispatch(postFavoriteFilm(false));
     dispatch(fetchFavoriteFilmList());
   })
    .catch((error) => {

      throw error;
    });
};
