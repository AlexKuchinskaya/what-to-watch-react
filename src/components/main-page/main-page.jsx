import React, {useEffect, useState} from 'react';
import Logo from '../logo/logo';
import {PromoFilmPropType, FilmsPropType} from '../../types/types';
import FilmList from '../films-list/films-list';
import Footer from '../footer/footer';
import GenreList from './genre-list';
import ShowMoreButton from './show-more-button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {filterMoviesByGenre} from '../../selectors/selectors';
import AvatarLogin from '../header/header-avatar';
import {AuthorizationStatus, MAX_FILMS} from '../../const/utils';
import HeaderSignInLink from '../header/header-sign-in-link';

import MyListButton from '../my-list-button/my-list-button';
import browserHistory from '../../browser-history';
import {Routes} from '../../const/routes-path';
import Header from '../header/header';
import {ExtraClassNames} from '../header/header-class-utils';

const MainPage = (props) => {
  const {resetGenre, promoFilm, filteredfilms, authorizationStatus} = props;

  const [filmsShownCount, setFilmsShownCount] = useState(MAX_FILMS);
  const handleShowMoreButton = () => {
    setFilmsShownCount(filmsShownCount + 8);
  };
  const isShowMoreButtonShown = filteredfilms.length > filmsShownCount;
  const promoFilmIdString = promoFilm.id.toString();
  const resetFilmsCount = () => {
    setFilmsShownCount(MAX_FILMS);
  };

  useEffect(() => {
    setFilmsShownCount(MAX_FILMS);
    resetGenre();
  }, []);

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header extraClassName={ExtraClassNames.MOVIE_CARD_HEADER}>
        <Logo isLogoLinkLight={false}/>
        {authorizationStatus === AuthorizationStatus.AUTH ? <AvatarLogin /> : <HeaderSignInLink/>}
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={() => browserHistory.push(`${Routes.PLAYER_NO_ID}/${promoFilm.id}`)} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton favoriteMovieId={promoFilmIdString}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList resetFilmsCount={resetFilmsCount}/>
        <FilmList films={filteredfilms} filmsShownCount={filmsShownCount}/>
        {isShowMoreButtonShown ? <ShowMoreButton handleShowMoreButton={handleShowMoreButton}/> : null}

      </section>

      <Footer />
    </div>
  </ >;
};


MainPage.propTypes = {
  filteredfilms: FilmsPropType,
  promoFilm: PromoFilmPropType,
  resetGenre: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  filteredfilms: filterMoviesByGenre(state),
  promoFilm: state.promoFilm,
  isPromoFilmLoading: state.isDataLoading,
  authorizationStatus: state.authorizationStatus,
  isFilmFavorite: state.isFilmFavorite,
});

const mapDispatchToProps = (dispatch) => ({
  resetGenre(genre) {
    dispatch(ActionCreator.resetGenre(genre));
  },
});
export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

