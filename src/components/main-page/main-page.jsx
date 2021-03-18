import React, { useEffect } from 'react';
import Logo from '../logo/logo';
import {PromoFilmPropType, FilmsPropType} from '../../types/types';
import FilmList from '../films-list/films-list';
import {useHistory} from 'react-router-dom';
import Footer from '../footer/footer';
import GenreList from './genre-list';
import ShowMoreButton from './show-more-button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {fetchPromoFilm} from '../../store/api-actions';
import {filterMoviesByGenre, getCurrentFilmsShownCount, getPromofilm} from '../../selectors/selectors';

const MainPage = (props) => {
  const {resetGenre, resetShowMoreMoviesButton, fetchPromoFilm, promoFilm, filteredfilms, filmsShownCount} = props;
  console.log(`promoFilm name`, promoFilm.name)
  const history = useHistory();
  const isShowMoreButtonShown = filteredfilms.length > filmsShownCount;

  useEffect(() => {
    // fetchPromoFilm();
    resetShowMoreMoviesButton();
    resetGenre();
  }, []);
  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo isLogoLinkLight={false}/>

        <div className="user-block">
          <div onClick={() => history.push(`/mylist`)} className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

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
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList />
        <FilmList />
        {isShowMoreButtonShown ? <ShowMoreButton /> : null}

      </section>

      <Footer />
    </div>
  </ >;
};


MainPage.propTypes = {
  filteredfilms: FilmsPropType,
  promoFilm: PromoFilmPropType,
  filmsShownCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  filteredfilms: filterMoviesByGenre(state),
  filmsShownCount: getCurrentFilmsShownCount(state),
  promoFilm: getPromofilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetShowMoreMoviesButton() {
    dispatch(ActionCreator.resetShowMoreMoviesButton());
  },
  resetGenre(genre) {
    dispatch(ActionCreator.resetGenre(genre));
  },
  fetchPromoFilm() {
    dispatch(fetchPromoFilm());
  },
});
export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

