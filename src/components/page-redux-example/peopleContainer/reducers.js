import { $addPerson } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case $addPerson:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};
