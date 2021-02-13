import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Player from '../player/player';
import MoviePage from '../film/movie-page';
import ReviewAdding from '../add-review/add-review';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id/review">
          <ReviewAdding />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired
      })
  ).isRequired
};
export default App;


