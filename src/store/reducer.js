import {filmsMock} from "../mocks/films";
import {ActionType} from "./action";

const initialState = {
  genre: `All genres`,
  filmList: filmsMock
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_NEW_FILMLIST_BY_GENRE:
      return {
        ...state,
        filmList: state.filmList
      };
    default:
      return state;
  }

};

export {reducer};
