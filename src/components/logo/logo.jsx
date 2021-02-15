import React from 'react';
import PropTypes from 'prop-types';


const Logo = ({isLogoLinkLight}) => {
  return (
    <div className="logo">
      <a href="main.html" className={`logo__link ${isLogoLinkLight ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

export default Logo;

Logo.propTypes = {
  isLogoLinkLight: PropTypes.bool
};
