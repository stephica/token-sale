import { makeActionCreator } from '../../../../utils';

export const $updateAccountFormState = 'UPDATE_ACCOUNT_FORM_STATE';
export const updateAccountFormState = makeActionCreator(
  $updateAccountFormState,
  'state'
);

export default (state = {}, action) => {
  switch (action.type) {
    case $updateAccountFormState:
      return {
        ...state,
        state: action.state,
      };
    default:
      return state;
  }
};

export const getUpdateAccountFormState = state =>
  state.account.updateAccountForm.state;
