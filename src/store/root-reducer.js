
import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {filmsDataAndInteraction} from './films-data-interaction/films-data-interaction';
import {user} from './user/user';

export const NameSpace = {
  APP: `APP`,
  FILMS: `GAME`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP]: appData,
  [NameSpace.FILMS]: filmsDataAndInteraction,
  [NameSpace.USER]: user,
});

