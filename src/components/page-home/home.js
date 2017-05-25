import React from 'react';
import { string } from 'prop-types';
import Buffer from '../balanc3-components/buffer';
import StyledLink from '../balanc3-components/styled-link';

const ListItem = ({ to, label }) => (
  <li>
    <StyledLink to={to}>{label}</StyledLink>
  </li>
);

ListItem.propTypes = {
  to: string,
  label: string,
};

export default () => (
  <Buffer>
    <h2>Balanc3 Starter</h2>
    <p>
      This repo is meant to be slightly opinionated,
      containing commonly used react tools such as:
    </p>
    <ul>
      <ListItem to="http://redux.js.org" label="redux" />
      <ListItem to="https://github.com/acdlite/recompose" label="recompose" />
      <ListItem to="https://semantic-ui.com/" label="semantic ui" />
      <ListItem
        to="https://github.com/reacttraining/react-router"
        label="react router"
      />
      <ListItem to="https://styled-components.com/" label="styled-components" />
      <ListItem
        to="https://github.com/jeffbski/redux-logic"
        label="redux-logic"
      />
      <ListItem
        to="https://github.com/apollographql/apollo-client"
        label="graphql &amp; apollo"
      />
      <ListItem to="https://github.com/github/fetcht" label="fetch polyfill" />
      <ListItem
        to="https://github.com/contra/react-responsivet"
        label="react responsive"
      />
      <ListItem to="http://redux-form.com" label="redux form" />
    </ul>
  </Buffer>
);
