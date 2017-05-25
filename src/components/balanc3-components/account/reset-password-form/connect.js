import { connect } from 'react-redux';
import ResetPasswordForm from './reset-password-form';
import { isValidPassword } from '../logic';
import { hideLoginModal } from '../modal/reducers';
import {
  postResetPassword,
  getResetPasswordState,
  getResetPasswordError,
} from './reducers';
import { reduxForm, formValueSelector } from 'redux-form';

const formName = 'resetPassword';
const select = formValueSelector(formName);

function mapStateToProps(state, props) {
  return {
    newPassword: select(state, 'password'),
    formState: getResetPasswordState(state),
    formError: getResetPasswordError(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    resetPassword: newPassword => dispatch(postResetPassword(newPassword)),
    hideLoginModal: () => dispatch(hideLoginModal()),
  };
}

const validate = values => {
  const errors = {};
  if (isValidPassword(values.password)) {
    errors.password = 'Password should include 1 capital letter, 1 number, and be a minimum of 8 characters';
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

const ReduxResetPasswordForm = reduxForm({
  form: formName,
  validate: validate,
})(ResetPasswordForm);

export default connect(mapStateToProps, mapDispatchToProps)(
  ReduxResetPasswordForm
);
