import { combineReducers } from 'redux'
import loginForm from './login-form/reducers'
import signupForm, { getSignupFormError as signupError } from './signup-form/reducers'
import updateAccountForm from './update-account-form/reducers'
import modal, { showLoginModal as _showLoginModal } from './modal/reducers'
import forgot from './forgot-password-form/reducers'
import reset from './reset-password-form/reducers'
import { makeActionCreator } from '../../../utils'

export const $userReceived = 'USER_RECEIVED'
export const userReceived = makeActionCreator($userReceived, 'user')

export const $logout = 'LOGOUT'
export const logout = makeActionCreator($logout)

const user = (state = {}, action) => {
  switch (action.type) {
    case $userReceived:
      return {
        ...state,
        ...action.user
      }
    case $logout:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  loginForm,
  signupForm,
  updateAccountForm,
  user,
  forgot,
  reset,
  modal
})
export const getSignupFormError = signupError
export const showLoginModal = _showLoginModal
export const getLoginFormError = state => state.account.loginForm.error
export const isUser = state => !!state.account.user
export const isLoggedIn = state => !!Object.keys(state.account.user).length
export const getUser = state => state.account.user
export const getUserToken = state => localStorage.getItem('userToken') || ''
