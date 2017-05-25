import { makeActionCreator } from '../../../../utils';

export const $postForgotPassword = 'POST_FORGOT_PASSWORD';
export const postForgotPassword = makeActionCreator(
  $postForgotPassword,
  'email'
);

export const $postForgotPasswordSuccess = 'POST_FORGOT_PASSWORD_SUCCESS';
export const postForgotPasswordSuccess = makeActionCreator($postForgotPassword);

export default (state = {}, action) => {
  switch (action.type) {
    case $postForgotPassword:
      return {
        ...state,
        posted: true,
      };
    default:
      return state;
  }
};

export const isForgotPosted = state => state.account.forgot.posted;
