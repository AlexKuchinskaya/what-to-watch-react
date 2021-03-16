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
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getFilmList, getPromofilm} from '../../selectors/selectors';

const App = (props) => {
  const {films, promoFilm, resetShowMoreMoviesButton, resetGenre} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}
          render={ () => {
            resetShowMoreMoviesButton();
            resetGenre();
            return <MainPage films={films} promoFilm={promoFilm} />;
          }}
        >
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
          <Player promoFilm={promoFilm} isPlaying={true}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = filmsListPropTypes;

const mapStateToProps = (state) => (
  {
    films: getFilmList(state),
    promoFilm: getPromofilm(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  resetShowMoreMoviesButton() {
    dispatch(ActionCreator.resetShowMoreMoviesButton());
  },
  resetGenre(genre) {
    dispatch(ActionCreator.resetGenre(genre));
  },
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

