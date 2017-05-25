import { makeActionCreator } from '../../../../utils';

export const $postResetPassword = 'POST_RESET_PASSWORD';
export const postResetPassword = makeActionCreator(
  $postResetPassword,
  'password'
);

export const $resetPasswordError = 'RESET_PASSWORD_ERROR';
export const resetPasswordError = makeActionCreator(
  $resetPasswordError,
  'error'
);

export const $resetPasswordSuccess = 'RESET_PASSWORD_SUCCESS';
export const resetPasswordSuccess = makeActionCreator($resetPasswordSuccess);

export default (state = {}, action) => {
  switch (action.type) {
    case $postResetPassword:
      return {
        ...state,
        state: 'loading',
      };
    case $resetPasswordError:
      return {
        ...state,
        error: action.error,
        state: 'error',
      };
    case $resetPasswordSuccess:
      return {
        ...state,
        error: null,
        state: 'success',
      };
    default:
      return state;
  }
};

export const getResetPasswordError = state => state.account.reset.error;
export const getResetPasswordState = state => state.account.reset.state;
