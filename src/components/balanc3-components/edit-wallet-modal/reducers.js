import { makeActionCreator } from '../../../utils';

export const $showEditWalletModal = 'SHOW_EDIT_WALLET_MODAL';
export const showEditWalletModal = makeActionCreator(
  $showEditWalletModal,
  'wallet'
);

export const $hideEditWalletModal = 'HIDE_EDIT_WALLET_MODAL';
export const hideEditWalletModal = makeActionCreator($hideEditWalletModal);

export default (state = {}, action) => {
  switch (action.type) {
    case $showEditWalletModal:
      return {
        ...state,
        activeState: true,
        walletInfo: action.wallet,
      };
    case $hideEditWalletModal:
      return {
        ...state,
        activeState: false,
      };
    default:
      return state;
  }
};

export const getModalState = state => state.editWalletModal.activeState || null;
export const getEditWalletInfo = state =>
  state.editWalletModal.walletInfo || null;
