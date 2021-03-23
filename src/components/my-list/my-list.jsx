import React, {useEffect} from 'react';
import FilmList from '../films-list/films-list';
import Logo from '../logo/logo';
import {FilmsPropType} from '../../types/types';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const/utils';
import AvatarLogin from '../header/header-avatar';
import HeaderSignInLink from '../header/header-sign-in-link';
import {fetchFavoriteFilmList} from '../../store/api-actions';
import PropTypes from 'prop-types';

const MyList = (props) => {
  const {favoriteFilms, authorizationStatus, onLoadFavoriteFilmsList, isFavoriteFilmLoading} = props;

  useEffect(() => {
    if (!isFavoriteFilmLoading) {
      onLoadFavoriteFilmsList();
    }
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLogoLinkLight={false}/>

        <h1 className="page-title user-page__title">My list</h1>

        {authorizationStatus === AuthorizationStatus.AUTH ? <AvatarLogin /> : <HeaderSignInLink/>}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmList films={favoriteFilms} filmsShownCount={favoriteFilms.length}/>
        </div>
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: FilmsPropType,
  isFavoriteFilmLoading: PropTypes.bool.isRequired,
  onLoadFavoriteFilmsList: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    favoriteFilms: state.favoriteFilms,
    isFavoriteFilmLoading: state.isFavoriteFilmLoading,
    authorizationStatus: state.authorizationStatus,
  }
);

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteFilmsList() {
    dispatch(fetchFavoriteFilmList());
  }
});
export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

