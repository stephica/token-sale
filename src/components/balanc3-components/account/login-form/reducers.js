import { makeActionCreator } from '../../../../utils';

export const $loginWith = 'LOGIN_WITH';
export const loginWith = makeActionCreator($loginWith, 'id', 'password');

export const $loginError = 'LOGIN_ERROR';
export const loginError = makeActionCreator($loginError, 'error');

export default (state = {}, action) => {
  switch (action.type) {
    case $loginError:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case $loginWith:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const getError = state => state.account.loginForm.error;
export const isLoading = state => state.account.loginForm.loading;
