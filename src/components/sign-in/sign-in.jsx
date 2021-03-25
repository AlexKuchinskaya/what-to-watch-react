import React, {useRef} from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {ExtraClassNames} from '../header/header-class-utils';
import Header from '../header/header';
import {getIsErrorAuthorization} from '../../store/user/selectors';

const SignIn = ({onSubmitForm, isErrorAuthorization}) => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let emailCurrentValue = emailRef.current.value;
    let passwordCurrentValue = passwordRef.current.value;
    if (emailCurrentValue.length !== 0 && emailCurrentValue.length !== 0) {
      onSubmitForm({
        login: emailCurrentValue,
        password: passwordCurrentValue,
      });
    }

  };
  return (
    <div className="user-page">
      <Header extraClassName={ExtraClassNames.USER_PAGE_HEAD}>
        <Logo isLogoLinkLight={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {isErrorAuthorization ? (
            <div className="sign-in__message">
              <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
            </div>
          ) : null}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  isErrorAuthorization: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isErrorAuthorization: getIsErrorAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
