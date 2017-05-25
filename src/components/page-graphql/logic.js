import { createLogic } from 'redux-logic';
import { $queryBySender } from './actions';

const queryBySender = createLogic({
  type: $queryBySender,
  process({ getState, action }, dispatch, done) {
    console.log('GET_BY_SENDER action in logic', action);
    done();
  },
});

export default [queryBySender];
