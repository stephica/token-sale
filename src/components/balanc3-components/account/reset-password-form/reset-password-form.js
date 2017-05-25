import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { ReduxFormInput } from '../../../balanc3-components';

const ResetPasswordForm = props => {
  const {
    invalid,
    handleSubmit,
    resetPassword,
    formState,
    formError,
    newPassword,
    hideLoginModal,
  } = props;
  const successState = formState === 'success';
  const errorState = formState === 'error';
  const loadingState = formState === 'loading';
  return (
    <Form
      warning
      onSubmit={handleSubmit(() => resetPassword(newPassword))}
      loading={loadingState}
      error={errorState}
      success={successState}
    >
      <Form.Field>
        Your new password should contain at least 8 characters, 1 uppercase and 1 lowercase
      </Form.Field>
      <Field
        name="password"
        placeholder="Password"
        component={ReduxFormInput}
      />
      <Field
        name="confirmPassword"
        placeholder="Confirm Password"
        component={ReduxFormInput}
      />
      <Button fluid type="submit" disabled={invalid} color="green">
        Reset Password
      </Button>
      <Message error>{formError}</Message>
      <Message success>
        Password successfully reset, you are now logged in and ready to use your account.
      </Message>
      {successState &&
        <Button color="green" onClick={hideLoginModal}>Close Modal</Button>}
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  handleSubmit: func,
  hideLoginModal: func,
  invalid: bool,
  formError: string,
  newPassword: string,
  formState: string,
  resetPassword: func,
};

export default ResetPasswordForm;
