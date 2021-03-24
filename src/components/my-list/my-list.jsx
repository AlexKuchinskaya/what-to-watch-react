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
import Header from '../header/header';
import {ExtraClassNames} from '../header/header-class-utils';

const MyList = (props) => {
  const {favoriteFilms, authorizationStatus, onLoadFavoriteFilmsList} = props;
  useEffect(() => {
    onLoadFavoriteFilmsList();
  }, []);

  return (
    <div className="user-page">
      <Header extraClassName={ExtraClassNames.USER_PAGE_HEAD}>
        <Logo isLogoLinkLight={false}/>

        <h1 className="page-title user-page__title">My list</h1>

        {authorizationStatus === AuthorizationStatus.AUTH ? <AvatarLogin /> : <HeaderSignInLink/>}
      </Header>

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

