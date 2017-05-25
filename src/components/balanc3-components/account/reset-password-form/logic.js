import { createLogic } from 'redux-logic';
import { userReceived } from '../reducers';
import {
  $postResetPassword,
  resetPasswordSuccess,
  resetPasswordError,
} from './reducers';
import { baseUrl } from '../../../base/config';

const resetPassword = createLogic({
  type: $postResetPassword,
  process({ getState, action }, dispatch, done) {
    console.log('postResetPassword logic:', action);
    const token = action.token ||
      window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    const resetUrl = `${baseUrl}/reset/${token}?password=${action.password}`;
    fetch(resetUrl, { method: 'POST' })
      .then(res => res.json())
      .then(res => {
        if (!res.err) {
          const { token, email, _id } = res;
          const user = { token, email, _id };
          dispatch(userReceived(user));
          dispatch(resetPasswordSuccess());
        } else {
          dispatch(resetPasswordError(res.err));
        }
        done();
      })
      .catch(err => {
        dispatch(resetPasswordError('Connectivity error occured'));
        done();
      });
  },
});

export default resetPassword;
