import React from 'react';
import Logo from '../logo/logo';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo isLogoLinkLight={true}/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
