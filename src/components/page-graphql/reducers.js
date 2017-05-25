import { $queryBySender } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case $queryBySender:
      return {
        ...state,
        sender: action.sender,
      };
    default:
      return state;
  }
};

export const getSender = state =>
  state && state.getBySender && state.getBySender.sender;
