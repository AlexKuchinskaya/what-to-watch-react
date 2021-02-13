
import PropTypes from 'prop-types';

export const FilmPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
});

export const FilmsPropType = PropTypes.arrayOf(FilmPropType).isRequired;

