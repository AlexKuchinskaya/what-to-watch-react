import { filmsMock } from "../mocks/films";
import {ActionType} from "./action";

const initialState = {
  genre: `All genres`,
  filmList: filmsMock
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state, // деструктурируем предыдущее состояние
        genre: action.payload // меняем тот ключ который нужно поменять и возвращаем новый объект
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

export {reducer}; // почему он экспортируется как объект?
