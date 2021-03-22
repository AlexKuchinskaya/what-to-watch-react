import PropTypes from 'prop-types';
export const ReviewPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export const RviewsPropType = PropTypes.arrayOf(ReviewPropType).isRequired;
