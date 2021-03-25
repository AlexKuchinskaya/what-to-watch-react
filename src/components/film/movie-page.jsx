import React, {useEffect} from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {FilmPropType, FilmsPropType} from '../../types/types';
import Footer from '../footer/footer';
import {RviewsPropType} from '../../types/reviews-types';
import Tabs from './tabs';
import MovieInDetails from './tab-details';
import MovieReviews from './tab-reviews';
import MovieOverview from './tab-overview';
import SimilarMovies from './similar-movies';
import {connect} from 'react-redux';
import {fetchReviewList} from '../../store/api-actions';
import {FILMS_PATH, Routes} from '../../const/routes-path';
import {AuthorizationStatus} from '../../const/utils';
import AvatarLogin from '../header/header-avatar';
import HeaderSignInLink from '../header/header-sign-in-link';
import PropTypes from 'prop-types';
import NotFoundPage from '../not-found-page/not-found-page';
import MyListButton from '../my-list-button/my-list-button';
import browserHistory from '../../browser-history';
import Header from '../header/header';
import {ExtraClassNames} from '../header/header-class-utils';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getFilmList, getReviews, getSelectedFilm} from '../../store/films-data-interaction/selectors';


const MoviePage = (props) => {
  const {films, reviews, onLoadReviewList, authorizationStatus, movieId, selectedMovie} = props;
  useEffect(() => {
    if (selectedMovie !== null) {
      onLoadReviewList(selectedMovie.id);
    }
  }, []);

  const similarMovies = films.filter((film) => {
    if (selectedMovie !== null && film.id !== selectedMovie.id) {
      return film.genre === selectedMovie.genre;
    }
    return null;
  });

  return (
    selectedMovie === null ? <NotFoundPage /> :
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={selectedMovie.backgroundImage} alt={selectedMovie.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header extraClassName={ExtraClassNames.MOVIE_CARD_HEADER}>
              <Logo isLogoLinkLight={false}/>

              {authorizationStatus === AuthorizationStatus.AUTH ? <AvatarLogin /> : <HeaderSignInLink/>}
            </Header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{selectedMovie.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{selectedMovie.genre}</span>
                  <span className="movie-card__year">{selectedMovie.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button onClick={() => browserHistory.push(`${Routes.PLAYER_NO_ID}/${movieId}`)} className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <MyListButton favoriteMovieId={movieId}/>
                  {authorizationStatus === AuthorizationStatus.AUTH && <Link to={`/${FILMS_PATH}/${movieId}/review`} className="btn movie-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={selectedMovie.posterImage} alt={selectedMovie.name} width="218" height="327" />
              </div>

              <Tabs>
                <div label="Overview">
                  <MovieOverview selectedMovie={selectedMovie} reviews={reviews}/>
                </div>
                <div label="Details">
                  <MovieInDetails selectedMovie={selectedMovie} />
                </div>
                <div label="Reviews">
                  <MovieReviews selectedMovie={selectedMovie} reviews={reviews}/>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <SimilarMovies similarMovies={similarMovies}/>
          </section>

          <Footer />
        </div>
      </ >
  );
};


MoviePage.propTypes = {
  films: FilmsPropType,
  reviews: RviewsPropType,
  selectedMovie: FilmPropType,
  movieId: PropTypes.string.isRequired,
  onLoadReviewList: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => (
  {
    movieId: ownProps.match.params.id,
    films: getFilmList(state),
    selectedMovie: getSelectedFilm(state, parseInt(ownProps.match.params.id, 10)),
    reviews: getReviews(state),
    authorizationStatus: getAuthorizationStatus(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onLoadReviewList(filmId) {
    dispatch(fetchReviewList(filmId));
  },
});
export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

