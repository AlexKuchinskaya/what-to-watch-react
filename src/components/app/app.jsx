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
import {initApp} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {getIsApplicationReady} from '../../store/app-data/selectors';

const App = ({onLoadData, isApplicationReady}) => {

  useEffect(() => {
    if (!isApplicationReady) {
      onLoadData();
    }
  }, []);

  if (!isApplicationReady) {
    return <LoadingScreen />;
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
        <Route exact path={Routes.FILMS_ID} component={MoviePage} />
        <PrivateRoute
          exact
          path={Routes.FILMS_ID_REVIEW}
          render={(props) => <ReviewAdding {...props}/>}
        />
        <Route exact path={Routes.PLAYER}
          render={(props) => (
            <Player {...props} isMovieCardPlayer={false} movieId={props.match.params.id}/>
          )}/>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  isApplicationReady: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  isApplicationReady: getIsApplicationReady(state),
});
const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(initApp());
  },
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


