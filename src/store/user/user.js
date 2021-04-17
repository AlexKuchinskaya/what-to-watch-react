import {adaptUserLoggedInInfo} from '../../components/server-data-adapter';
import {AuthorizationStatus} from '../../const/utils';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isErrorAuthorization: false,
  userLoggedInInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHECK_AUTHORIZATION:
      return {
        ...state,
        isErrorAuthorization: action.payload,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        userLoggedInInfo: adaptUserLoggedInInfo(action.payload),
      };
  }

  return state;
};

export {user};
