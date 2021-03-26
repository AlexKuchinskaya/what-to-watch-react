import {ActionType} from '../action';

const initialState = {
  isApplicationReady: false,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APPLICATION_READY:
      return {
        ...state,
        isApplicationReady: action.payload,
      };
  }

  return state;
};

export {appData};
