import { createLogic } from 'redux-logic';
import { $addPerson } from './actions';

const addPerson = createLogic({
  type: $addPerson,
  process({ getState, action }, dispatch, done) {
    console.log('action', action);
  },
});

export default [addPerson];
