import { createLogic } from 'redux-logic';
import { $loginWith, loginError } from './reducers';
import { getModalState, hideLoginModal } from '../modal/reducers';
import { userReceived } from '../reducers';
import { loginUrl } from '../../../base/config';

const login = createLogic({
  type: $loginWith,
  process({ getState, action }, dispatch, done) {
    const email = encodeURIComponent(action.id);
    const password = encodeURIComponent(action.password);
    const encodedUrl = `${loginUrl}?email=${email}&password=${password}`;
    console.log('login logic called with action:', action);
    fetch(encodedUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => {
        if (!res.err) {
          dispatch(userReceived(res));
          const isModal = getModalState(getState());
          if (isModal) dispatch(hideLoginModal());
        } else {
          const err = res.err || 'A server error has occured';
          dispatch(loginError(err));
        }
      })
      .then(done)
      .catch(err => dispatch(loginError('An fetching error has occured')));
  },
});

export default login;
