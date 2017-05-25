import { connect } from 'react-redux';
import { getError, isLoading } from './reducers';
import { showLoginModal, hideLoginModal } from '../modal/reducers';
import LoginForm from './login-form';

function mapStateToProps(state, props) {
  return {
    error: getError(state),
    loading: isLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: () => dispatch(showLoginModal('signup')),
    forgot: () => dispatch(showLoginModal('forgot')),
    hide: () => dispatch(hideLoginModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
