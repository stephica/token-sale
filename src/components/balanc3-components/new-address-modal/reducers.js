import { makeActionCreator } from '../../../utils'

export const $showNewAddressModal = 'SHOW_NEW_ADDRESS_MODAL'
export const showNewAddressModal = makeActionCreator($showNewAddressModal, 'wallet')

export const $hideNewAddressModal = 'HIDE_NEW_ADDRESS_MODAL'
export const hideNewAddressModal = makeActionCreator($hideNewAddressModal)

export default (state = {}, action) => {
  switch (action.type) {
    case $showNewAddressModal:
      return {
        ...state,
        activeState: true,
        walletInfo: action.wallet
      }
    case $hideNewAddressModal:
      return {
        ...state,
        activeState: false
      }
    default:
      return state
  }
}

export const getModalState = state => state.newAddressModal.activeState || null
export const getWalletInfo = state => state.newAddressModal.walletInfo || null
