
import {adaptFilmsToClient, adaptPromoFilmToClient} from '../../components/server-data-adapter';
import {ALL_GENRES_FILTER} from '../../const/utils';
import {ActionType, changeGenre, checkErrorCommentPost, loadFavoriteFilms, loadFilms, loadPromoFilm, loadReviews, postFavoriteFilm, resetGenre} from '../action';
import {filmsMock, promoFilmMock, RANDOM_GENRE, reviewsMock} from '../tests-const';
import {filmsDataAndInteraction} from './films-data-interaction';
import {createAPI} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import { fetchFavoriteFilmList, fetchPromoFilm, fetchReviewList, addReview } from '../api-actions';
import { APIRoute } from '../../const/routes-path';

const api = createAPI(() => {});

const initialStateTest = {
  genre: ALL_GENRES_FILTER,
  filmList: [],
  reviews: [],
  promoFilm: {},
  favoriteFilms: [],
  isErrorCommentPosting: false,
  isFilmFavorite: false
};
let changedStateTest = {
  genre: RANDOM_GENRE,
  filmList: [],
  reviews: [],
  promoFilm: {},
  favoriteFilms: [],
  isErrorCommentPosting: false,
  isFilmFavorite: false
};
describe(`Reducers work correctly`, () => {
  // редьюсер - простая функция, которая
  // которая принимает на вход состояние и какое-то действие, а затем
  // в зависимости от действия обновляет состояние
  // результат обновления сотсояния - новое состояние
  // редьюсер при незнакомом действии возвращает начальное состояние
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsDataAndInteraction(undefined, {}))
      .toEqual(initialStateTest);
  });
  it(`Reducer should change initial genre by a given value`, () => {
    expect(filmsDataAndInteraction(initialStateTest, changeGenre(RANDOM_GENRE))).toEqual({
      ...initialStateTest,
      genre: RANDOM_GENRE,
    });
  });
  it(`Reducer should reset selected genre by a default one`, () => {
    expect(filmsDataAndInteraction(initialStateTest, resetGenre())).toEqual({
      ...changedStateTest,
      genre: ALL_GENRES_FILTER,
    });
  });
  it(`Reducer should update films by load films`, () => {
    const filmsMockAdapted = adaptFilmsToClient(filmsMock);
    expect(filmsDataAndInteraction(initialStateTest, loadFilms(filmsMock))).toEqual({
      ...initialStateTest,
      filmList: filmsMockAdapted,
    });
  });
  it(`Reducer should update promoFilm by load promo-film`, () => {
    const promoFilmMockAdapted = adaptPromoFilmToClient(promoFilmMock);
    expect(filmsDataAndInteraction(initialStateTest, loadPromoFilm(promoFilmMock))).toEqual({
      ...initialStateTest,
      promoFilm: promoFilmMockAdapted,
    });
  });
  it(`Reducer should update reviews by load reviews`, () => {
    expect(filmsDataAndInteraction(initialStateTest, loadReviews(reviewsMock))).toEqual({
      ...initialStateTest,
      reviews: reviewsMock,
    });
  });
  it(`Reducer should update films by load films`, () => {
    const favoriteFilmsMockAdapted = adaptFilmsToClient(filmsMock);
    expect(filmsDataAndInteraction(initialStateTest, loadFavoriteFilms(filmsMock))).toEqual({
      ...initialStateTest,
      favoriteFilms: favoriteFilmsMockAdapted,
    });
  });
  it(`Reducer should add favorite film by a given value of isFilmFavorite`, () => {
    expect(filmsDataAndInteraction(initialStateTest, postFavoriteFilm(true))).toEqual({
      ...initialStateTest,
      isFilmFavorite: true,
    });
  });
  it(`Reducer should check a status of the posted comment by a given value of isErrorCommentPosting`, () => {
    expect(filmsDataAndInteraction(initialStateTest, checkErrorCommentPost(true))).toEqual({
      ...initialStateTest,
      isErrorCommentPosting: true,
    });
    expect(filmsDataAndInteraction(
        {...changedStateTest,
          isErrorCommentPosting: true},
        checkErrorCommentPost(false))).toEqual({
      ...changedStateTest,
      isErrorCommentPosting: false,
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmListLoader = fetchFavoriteFilmList();

    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(200, [{fake: true}]);

    return favoriteFilmListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFavoriteFilms([{fake: true}]));
      });
  });
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.FILM_PROMO)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadPromoFilm([{fake: true}]));
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviewList(1);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadReviews([{fake: true}]));
      });
  });
  it(`Should make a correct send to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsSend = addReview(1, {
      rating: `1`,
      comment: `comment`,
    });

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return reviewsSend(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, checkErrorCommentPost(false));
        // expect(dispatch).toHaveBeenNthCalledWith(2, fetchReviewList(1)); как это сделать
        // browserHistory.push(`/${FILMS_PATH}/${id}`);
        // catch((error) => {dispatch(checkErrorCommentPost(true));
      });
  });
});
