import { makeActionCreator } from '../../../utils';

export const $showNewWalletModal = 'SHOW_NEW_WALLET_MODAL';
export const showNewWalletModal = makeActionCreator(
  $showNewWalletModal,
  'wallet'
);

export const $hideNewWalletModal = 'HIDE_NEW_WALLET_MODAL';
export const hideNewWalletModal = makeActionCreator($hideNewWalletModal);

export default (state = {}, action) => {
  switch (action.type) {
    case $showNewWalletModal:
      return {
        ...state,
        activeState: true,
        walletInfo: action.wallet,
      };
    case $hideNewWalletModal:
      return {
        ...state,
        activeState: false,
      };
    default:
      return state;
  }
};

export const getModalState = state => state.newWalletModal.activeState || null;
export const getWalletInfo = state => state.newWalletModal.walletInfo || null;
