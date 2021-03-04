import React from 'react';
import {filmsListPropTypes} from '../../types/types';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Player from '../player/player';
import MoviePage from '../film/movie-page';
import ReviewAdding from '../add-review/add-review';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Routes} from '../../const/routes-path';

const App = (props) => {
  const {films, promoFilm} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainPage films={films} promoFilm={promoFilm} />
        </Route>
        <Route exact path={Routes.LOG_IN}>
          <SignIn />
        </Route>
        <Route exact path={Routes.MY_LIST}>
          <MyList films={films} />
        </Route>
        <Route exact path={Routes.FILMS_ID}>
          <MoviePage films={films}/>
        </Route>
        <Route exact path={Routes.FILMS_ID_REVIEW}>
          <ReviewAdding />
        </Route>
        <Route exact path={Routes.PLAYER}>
          <Player promoFilm={promoFilm}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = filmsListPropTypes;
export default App;


