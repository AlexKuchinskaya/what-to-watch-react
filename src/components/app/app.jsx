import React from 'react';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Player from '../player/player';
import MoviePage from '../film/movie-page';
import ReviewAdding from '../add-review/add-review';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Routes} from '../../const/routes-path';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN} component={MainPage}/>
        <Route exact path={Routes.LOG_IN} component={SignIn} />
        <Route exact path={Routes.MY_LIST} component={MyList} />
        <Route exact path={Routes.FILMS_ID} component={MoviePage} />
        <Route exact path={Routes.FILMS_ID_REVIEW} component={ReviewAdding} />
        <Route exact path={Routes.PLAYER} component={Player} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};


export default App;


