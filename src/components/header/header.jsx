import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {extraClassName} = props;
  return (
    <header className={`page-header ${extraClassName ? `${extraClassName}` : ``}`} >
      {props.children}
    </header>
  );
};


Header.propTypes = {
  children: PropTypes.node.isRequired,
  extraClassName: PropTypes.string
};


export default Header;
