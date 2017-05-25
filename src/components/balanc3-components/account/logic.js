import { createLogic } from 'redux-logic';
import { getUserToken } from '../account/reducers';
import { $userReceived, $logout } from './reducers';
import { baseUrl } from '../../base/config';
import loginLogic from './login-form/logic';
import signupLogic from './signup-form/logic';
import resetLogic from './reset-password-form/logic';
import forgotLogic from './forgot-password-form/logic';
export const isValidPassword = string =>
  !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(string);
export const isValidEmail = string =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(string);

const userReceived = createLogic({
  type: $userReceived,
  process({ getState, action }, dispatch, done) {
    if (action.user && action.user.token) {
      localStorage.setItem('userToken', action.user.token);
    }
    done();
  },
});

const logout = createLogic({
  type: $logout,
  process({ getState, action }, dispatch, done) {
    const encodedUrl = `${baseUrl}/logout?token=${getUserToken()}`;
    localStorage.removeItem('userToken');
    fetch(encodedUrl, { method: 'POST' });
    done();
  },
});

export default [
  userReceived,
  logout,
  loginLogic,
  resetLogic,
  forgotLogic,
  signupLogic,
];
