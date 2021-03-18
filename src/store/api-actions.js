import {AuthorizationStatus} from '../const/utils';

import {ActionCreator} from './action';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms((data))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm((data))))
);
export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews((data))))
);
// checkAuth - для проверки авторизован пользователь или нет
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {}) // обрабатывать не нужно потому что сама попытка запроса нам скажет авторизован или нет
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

