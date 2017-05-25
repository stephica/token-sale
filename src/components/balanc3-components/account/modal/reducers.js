import { makeActionCreator } from '../../../../utils';

export const $showLoginModal = 'SHOW_LOGIN_MODAL';
export const showLoginModal = makeActionCreator($showLoginModal, 'activeState');

export const $hideLoginModal = 'HIDE_LOGIN_MODAL';
export const hideLoginModal = makeActionCreator($hideLoginModal);

export default (state = {}, action) => {
  switch (action.type) {
    case $showLoginModal:
      return {
        ...state,
        activeState: action.activeState || 'login',
      };
    case $hideLoginModal:
      return {
        ...state,
        activeState: false,
      };
    default:
      return state;
  }
};

export const getModalState = state => state.account.modal.activeState || null;
