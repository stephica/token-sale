import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { graphqlUrl } from '../components/base/config';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { reducer as formReducer } from 'redux-form';

import peopleReducer
  from '../components/page-redux-example/peopleContainer/reducers';
import getBySenderReducer from '../components/page-graphql/reducers';
import accountReducer from '../components/balanc3-components/account/reducers';
import sidebarReducer from '../components/balanc3-components/sidebar/reducers';
import newAddressReducer
  from '../components/balanc3-components/new-address-modal/reducers';
import newWalletModalReducer
  from '../components/balanc3-components/new-wallet-modal/reducers';
import editWalletModalReducer
  from '../components/balanc3-components/edit-wallet-modal/reducers';

import graphqlLogic from '../components/page-graphql/logic';
import personLogic
  from '../components/page-redux-example/peopleContainer/logic';
import accountLogic from '../components/balanc3-components/account/logic';
const networkInterface = createNetworkInterface({ uri: graphqlUrl });
export const client = new ApolloClient({ networkInterface: networkInterface });

const logicMiddleware = createLogicMiddleware([
  ...personLogic,
  ...graphqlLogic,
  ...accountLogic,
]);

const rootReducer = combineReducers({
  form: formReducer,
  people: peopleReducer,
  getBySender: getBySenderReducer,
  sidebar: sidebarReducer,
  account: accountReducer,
  newAddressModal: newAddressReducer,
  newWalletModal: newWalletModalReducer,
  editWalletModal: editWalletModalReducer,
  apollo: client.reducer(),
});

export const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(logicMiddleware, client.middleware()),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(logicMiddleware, client.middleware()))
  );
};
