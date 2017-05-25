import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Form, Message, Container } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { ReduxFormInput } from '../../../balanc3-components';

const ForgotPasswordForm = props => {
  const { error, invalid, handleSubmit, postForgotPassword, posted } = props;
  return (
    <Container>
      {!posted &&
        <span>
          <p>
            Enter the email address associated with your Balanc3 account.
            We will send you a reset link to easily create a new password :)
          </p>
          <Form
            warning
            onSubmit={handleSubmit(postForgotPassword)}
            error={!!error}
          >
            <Field
              name="email"
              placeholder="Email"
              component={ReduxFormInput}
              type="password"
            />
            <Message error content={error} />
            <Button type="submit" disabled={invalid} color="green">
              Reset Password
            </Button>
          </Form>
        </span>}
      {posted &&
        <p>
          We have sent an email with the instructions for resetting your password.
          If you don't receive this email please check or junk mail or come back or send an email to support@balanc3.net
        </p>}
    </Container>
  );
};

ForgotPasswordForm.propTypes = {
  handleSubmit: func,
  invalid: bool,
  posted: bool,
  error: string,
  postForgotPassword: func,
};

export default ForgotPasswordForm;
