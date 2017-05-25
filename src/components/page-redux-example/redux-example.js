import React from 'react';
import PeopleContainer from './peopleContainer';
import Buffer from '../balanc3-components/buffer';

export default () => (
  <div>
    <Buffer>
      <h2>Redux Example</h2>
      <p>
        {' '}
        Here is an example of using Redux.  Docs can be found at
        {' '}
        <a href="http://redux.js.org/docs/basics/UsageWithReact.html">
          {' '}Redux.js{' '}
        </a>
      </p>
      <PeopleContainer />
    </Buffer>
  </div>
);
