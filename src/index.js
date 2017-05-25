import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore, client } from './store/configure-store';
import theme from './components/base/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import 'whatwg-fetch';
import { init } from './utils';
export const store = configureStore();

const AppWithRouterInfo = withRouter(App);

init();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client} store={store}>
      <Router>
        <AppWithRouterInfo />
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
