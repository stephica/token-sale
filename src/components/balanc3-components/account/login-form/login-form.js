import React from 'react';
import { string, bool, func } from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import { dispatch } from '../../../../utils';
import { loginWith } from './reducers';

let email, password;

const clickhandler = e => {
  e.preventDefault();
  dispatch(loginWith(email, password));
};

const setEmail = e => email = e.target.value;
const setPassword = e => password = e.target.value;

const LoginForm = ({ error, loading }) => (
  <Form error={!!error} loading={loading} style={{ textAlign: 'center' }}>
    <Form.Field>
      <input placeholder="Email" type="email" onChange={setEmail} />
    </Form.Field>
    <Form.Field>
      <input placeholder="Password" type="password" onChange={setPassword} />
    </Form.Field>
    <Button fluid color="green" onClick={clickhandler}>Login</Button>
    <Message error content={error} />
  </Form>
);

LoginForm.propTypes = {
  error: string,
  signup: func,
  forgot: func,
  loading: bool,
};

export default LoginForm;
