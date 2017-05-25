import { createLogic } from 'redux-logic';
import { $postForgotPassword } from './reducers';
import { baseUrl } from '../../../base/config';

const ForgotPassword = createLogic({
  type: $postForgotPassword,
  process({ getState, action }, dispatch, done) {
    const forgotUrl = `${baseUrl}/forgot?email=${action.email}`;
    fetch(forgotUrl, { method: 'POST' })
      .then(res => res.json())
      .then(res => console.log('res:', res));
    done();
  },
});

export default ForgotPassword;
