import React from 'react';
import {Routes} from '../../const/routes-path';
import browserHistory from "../../browser-history";
import {AVATAR_IMAGE} from '../../const/utils';

const AvatarLogin = () => {
  return (
    <div className="user-block" onClick={() => browserHistory.push(`${Routes.MY_LIST}`)}>
      <div className="user-block__avatar">
        <img src={AVATAR_IMAGE} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

export default AvatarLogin;
