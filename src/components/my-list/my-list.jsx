import React, { useEffect } from 'react';
import FilmList from '../films-list/films-list';
import Logo from '../logo/logo';
import {filmsListPropTypes} from '../../types/types';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {getFilmList} from '../../selectors/selectors';
import {AuthorizationStatus} from '../../const/utils';
import AvatarLogin from '../header/header-avatar';
import HeaderSignInLink from '../header/header-sign-in-link';
import { fetchFavoriteFilmList } from '../../store/api-actions';

const MyList = (props) => {
  const {favoriteFilms, authorizationStatus, onLoadFavoriteFilmsList, isFavoriteFilmLoading} = props;
  console.log(`films`, favoriteFilms)

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
          <FilmList films={favoriteFilms}/>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// MyList.propTypes = filmsListPropTypes;

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

