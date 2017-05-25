import { makeActionCreator } from '../../../../utils';

export const $postSignup = 'POST_SIGNUP';
export const postSignup = makeActionCreator($postSignup, 'email', 'password');

export const $signupError = 'SIGNUP_ERROR';
export const signupError = makeActionCreator($signupError, 'error');

export default (state = {}, action) => {
  switch (action.type) {
    case $postSignup:
      return {
        ...state,
        loading: true,
      };
    case $signupError:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const getSignupFormError = state => state.account.signupForm.error;
