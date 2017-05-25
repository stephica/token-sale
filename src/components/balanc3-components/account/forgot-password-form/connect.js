import { connect } from 'react-redux';
import ForgotPasswordForm from './forgot-password-form';
import { isValidEmail } from '../logic';
import { reduxForm, formValueSelector } from 'redux-form';
import { postForgotPassword, isForgotPosted } from './reducers';

const formName = 'forgotPassword';
const selector = formValueSelector(formName);

function mapStateToProps(state, props) {
  return {
    posted: isForgotPosted(state),
    email: selector(state, 'email'),
  };
}

function mergeProps({ email, posted }, { dispatch }) {
  return {
    postForgotPassword: () => dispatch(postForgotPassword(email)),
    posted,
  };
}

const validate = values => {
  const errors = {};
  if (isValidEmail(values.email)) {
    errors.email = 'Email is invalid';
  }
  return errors;
};

const ReduxForgotPasswordForm = reduxForm({
  form: formName,
  validate: validate,
})(ForgotPasswordForm);

export default connect(mapStateToProps, null, mergeProps)(
  ReduxForgotPasswordForm
);
