import {AuthorizationStatus} from '../const/utils';
import {
  setApplicationReady,
  loadFilms,
  loadPromoFilm,
  loadReviews,
  requireAuthorization,
  loadUserInfo,
  loadFavoriteFilms,
  checkAuthorization,
  postFavoriteFilm,
  checkErrorCommentPost,
  changeGenre,
  resetGenre,
  ActionType
} from './action';
import {filmsMock, promoFilmMock, RANDOM_GENRE, reviewsMock, userInfoMock} from './tests-const';

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting ready where the Application returns correct action`, () => {
    expect(setApplicationReady(true)).toEqual({
      type: ActionType.SET_APPLICATION_READY,
      payload: true,
    });

    expect(setApplicationReady(false)).toEqual({
      type: ActionType.SET_APPLICATION_READY,
      payload: false
    });
  });

  it(`Action creator return action that loads films`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: filmsMock
    };
    expect(loadFilms(filmsMock)).toEqual(expectedAction);
  });

  it(`Action creator return action that loads favorite films`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: filmsMock
    };
    expect(loadFavoriteFilms(filmsMock)).toEqual(expectedAction);
  });

  it(`Action creator return action that loads promo-film`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMOFILM,
      payload: promoFilmMock
    };
    expect(loadPromoFilm(promoFilmMock)).toEqual(expectedAction);
  });
  it(`Action creator return action with reset genre with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(resetGenre()).toEqual(expectedAction);
  });

  it(`Action creator return action that changes the genre`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: RANDOM_GENRE
    };

    expect(changeGenre(RANDOM_GENRE)).toEqual(expectedAction);
  });

  it(`Action creator for the authorization check returns correct action`, () => {
    expect(checkAuthorization(true)).toEqual({
      type: ActionType.CHECK_AUTHORIZATION,
      payload: true,
    });

    expect(checkAuthorization(false)).toEqual({
      type: ActionType.CHECK_AUTHORIZATION,
      payload: false
    });
  });

  it(`Action creator for the favorite film posting returns correct action`, () => {
    const expectedAction = (status) => {
      return {
        type: ActionType.POST_FAVORITE_FILM,
        payload: status
      };
    };
    const isFilmFavoriteStatus = true;
    expect(postFavoriteFilm(isFilmFavoriteStatus)).toEqual(expectedAction(isFilmFavoriteStatus));

    expect(postFavoriteFilm(!isFilmFavoriteStatus)).toEqual(expectedAction(!isFilmFavoriteStatus));
  });

  it(`Action creator for the error check of the comment post returns correct action`, () => {
    const expectedAction = (status) => {
      return {
        type: ActionType.CHECK_ERROR_COMMENT_POSTING,
        payload: status
      };
    };
    const isErrorCommentPostingStatus = true;
    expect(checkErrorCommentPost(isErrorCommentPostingStatus)).toEqual(expectedAction(isErrorCommentPostingStatus));

    expect(checkErrorCommentPost(!isErrorCommentPostingStatus)).toEqual(expectedAction(!isErrorCommentPostingStatus));
  });

  it(`Action creator return action that loads reviews`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock
    };
    expect(loadReviews(reviewsMock)).toEqual(expectedAction);
  });

  it(`Action creator for the authorization requirements returns correct  action`, () => {
    const expectedAction = (status) => {
      return {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: status
      };
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction(AuthorizationStatus.NO_AUTH));
    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction(AuthorizationStatus.AUTH));
  });

  it(`Action creator return action that loads user information`, () => {
    const expectedAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfoMock
    };
    expect(loadUserInfo(userInfoMock)).toEqual(expectedAction);
  });
});
