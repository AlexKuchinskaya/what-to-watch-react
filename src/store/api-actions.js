import {AuthorizationStatus} from '../const/utils';
import {APIRoute, Routes} from './../const/routes-path';
import {ActionCreator} from './action';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms((data))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM_PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm((data))))
);
export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews((data))))
);
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Routes.LOG_IN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Routes.LOG_IN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Routes.MAIN)))
);

