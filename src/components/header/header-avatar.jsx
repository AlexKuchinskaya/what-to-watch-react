import React from 'react';
import {Routes} from '../../const/routes-path';
import browserHistory from "../../browser-history";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const AvatarLogin = ({userLoggedInInfo}) => {
  const {avatarUrl} = userLoggedInInfo;
  return (
    <div className="user-block" onClick={() => browserHistory.push(`${Routes.MY_LIST}`)}>
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};


AvatarLogin.propTypes = {
  userLoggedInInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  userLoggedInInfo: state.userLoggedInInfo,
});


export {AvatarLogin};
export default connect(mapStateToProps)(AvatarLogin);
