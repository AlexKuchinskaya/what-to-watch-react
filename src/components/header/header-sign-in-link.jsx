import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../const/routes-path';

const HeaderSignInLink = () => {
  return (
    <div className="user-block">
      <Link to={Routes.LOG_IN}>Sign In</Link>
    </div>
  );
};

export default HeaderSignInLink;
