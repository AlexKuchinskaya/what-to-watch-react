import React, {useEffect} from 'react';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Player from '../player/player';
import MoviePage from '../film/movie-page';
import ReviewAdding from '../add-review/add-review';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Routes} from '../../const/routes-path';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchFilmList, fetchPromoFilm} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = ({isDataLoading, onLoadData, onLoadPromoFilm, isPromoFilmLoading}) => {

  useEffect(() => {
    if (!isDataLoading) {
      onLoadData();
    }
  }, [isDataLoading]);

  useEffect(() => {
    if (!isPromoFilmLoading) {
      onLoadPromoFilm();
    }
  }, [isPromoFilmLoading]);

  if (!isDataLoading || !isPromoFilmLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.MAIN} component={MainPage}/>
        <Route exact path={Routes.LOG_IN} component={SignIn} />
        <PrivateRoute exact
          path={Routes.MY_LIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        {/* <Route exact path={Routes.MY_LIST} component={MyList} /> */}
        <Route exact path={Routes.FILMS_ID} component={MoviePage} />
        <PrivateRoute
          exact
          path={Routes.FILMS_ID_REVIEW}
          render={() => <ReviewAdding />}
        />
        {/* <Route exact path={Routes.FILMS_ID_REVIEW} component={ReviewAdding} /> */}
        <Route exact path={Routes.PLAYER} component={Player} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  isDataLoading: PropTypes.bool.isRequired,
  isPromoFilmLoading: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadPromoFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoading: state.isDataLoading,
  isPromoFilmLoading: state.isDataLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmList());
  },
  onLoadPromoFilm() {
    dispatch(fetchPromoFilm());
  },
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


