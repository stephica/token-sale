import { connect } from 'react-redux';
import { postSignup, getSignupFormError } from './reducers';
import { hideLoginModal, showLoginModal } from '../modal/reducers';
import SignupForm from './signup-form';
import { isValidEmail, isValidPassword } from '../logic';
import { reduxForm, formValueSelector, submit } from 'redux-form';

const formName = 'signup';
const select = formValueSelector(formName);

function mapStateToProps(state, props) {
  return {
    email: select(state, 'email'),
    password: select(state, 'password'),
    name: select(state, 'name'),
    formError: getSignupFormError(state),
  };
}

function mergeProps(props, { dispatch }) {
  const { email, password, name } = props;
  return {
    submitForm: e => dispatch(submit(formName)),
    postSignup: () => dispatch(postSignup(email, password, name)),
    hideLoginModal: () => dispatch(hideLoginModal()),
    login: () => dispatch(showLoginModal('login')),
    ...props,
  };
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (isValidEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (isValidPassword(values.password)) {
    errors.password = 'Password should include 1 capital letter, 1 number, and be a minimum of 8 characters';
  }
  return errors;
};

const ReduxSignupForm = reduxForm({
  form: formName,
  validate: validate,
})(SignupForm);

export default connect(mapStateToProps, null, mergeProps)(ReduxSignupForm);
