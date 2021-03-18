import React, {useEffect} from 'react';
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
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {fetchFilmList, fetchPromoFilm, fetchReviewList} from '../../store/api-actions';
import {filterMoviesByGenre, getCurrentFilmsShownCount, getPromofilm} from '../../selectors/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const App = ({isDataLoading, onLoadData, fetchPromoFilm}) => {
//   useEffect(() => {
//     init();
// }, []);
// if (!isApplicationReady) {
//     return <Loader />;
// }
  useEffect(() => {
    if (!isDataLoading) {
      onLoadData();
      fetchPromoFilm();
      fetchReviewList(1);
    }
  }, [isDataLoading]);

  if (!isDataLoading) {
    return (
      <LoadingScreen />
    );
  }
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


// export default App;

const mapStateToProps = (state) => ({
  isDataLoading: state.isDataLoading,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmList());
  },
  fetchPromoFilm() {
    dispatch(fetchPromoFilm());
  },
  fetchReviewList(filmId) {
    dispatch(fetchReviewList(filmId));
  },
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


