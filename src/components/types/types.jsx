
import PropTypes from 'prop-types';

export const FilmPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
});

export const FilmsPropType = PropTypes.arrayOf(FilmPropType).isRequired;

export const PromoFilmPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
});

export const LogoPropTypes = PropTypes.bool.isRequired;


export const mainPageAndAppPropTypes = {
  films: FilmsPropType,
  promoFilm: PromoFilmPropType,
  isLogoLinkLight: LogoPropTypes
};
