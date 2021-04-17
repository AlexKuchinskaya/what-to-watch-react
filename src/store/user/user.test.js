import MockAdapter from 'axios-mock-adapter';
import { adaptUserLoggedInInfo } from '../../components/server-data-adapter';
import {APIRoute} from '../../const/routes-path';
import {AuthorizationStatus} from '../../const/utils';
import {createAPI} from '../../services/api';
import {checkAuthorization, loadUserInfo, requireAuthorization} from '../action';
import {checkAuth, login} from '../api-actions';
import {userInfoMock} from '../tests-const';
import {user} from './user';

const api = createAPI(() => {});
const initialStateUser = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isErrorAuthorization: false,
  userLoggedInInfo: {},
};
const changedStateUser = {
  authorizationStatus: AuthorizationStatus.AUTH,
  isErrorAuthorization: false,
  userLoggedInInfo: {},
};
describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual(initialStateUser);
  });

  it(`Reducer should update authorizationStatus with a given value of AuthorizationStatus`, () => {

    expect(user(initialStateUser, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual({
        ...initialStateUser,
        authorizationStatus: AuthorizationStatus.AUTH
      });

    expect(user(changedStateUser, requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .toEqual({
        ...changedStateUser,
        authorizationStatus: AuthorizationStatus.NO_AUTH
      });
    expect(user(changedStateUser, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual(changedStateUser);

    expect(user(initialStateUser, requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .toEqual(initialStateUser);
  });

  it(`Reducer should check authorizationStatus with a given value of isErrorAuthorization`, () => {

    expect(user(initialStateUser, checkAuthorization(true)))
      .toEqual({
        ...initialStateUser,
        isErrorAuthorization: true
      });
    expect(user(initialStateUser, checkAuthorization(false)))
      .toEqual(initialStateUser);
  });

  it(`Reducer should load user information`, () => {
    const userInfoMockAdapted = adaptUserLoggedInInfo(userInfoMock);
    expect(user(initialStateUser, loadUserInfo(userInfoMock)))
      .toEqual({
        ...initialStateUser,
        userLoggedInInfo: userInfoMockAdapted
      });
  });
});
describe(`Async operation works correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn(); // заглушка для реальной функции, нам важно знать что эта функции будет вызвана
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOG_IN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2); // произойдет один вызов нашей функции
        // expect(dispatch).toHaveBeenNthCalledWith(1, loadUserInfo([{fake: true}]));
        expect(dispatch).toHaveBeenNthCalledWith(1, requireAuthorization(AuthorizationStatus.AUTH));
      });
  });
  // 2-ым тестовым случаем проверяем, что мы передаем реальные данные
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOG_IN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, requireAuthorization(AuthorizationStatus.AUTH));

        expect(dispatch).toHaveBeenNthCalledWith(2, checkAuthorization(false));
        // как сдеалть  .then(() => browserHistory.goBack())
      });
  });
});
