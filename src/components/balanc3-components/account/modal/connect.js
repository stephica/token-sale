import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getModalState, showLoginModal, hideLoginModal } from './reducers'
import LoginModal from './modal'

function mapStateToProps(state, props) {
  return {
    activeItem: getModalState(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(showLoginModal('login')),
    signup: () => dispatch(showLoginModal('signup')),
    forgot: () => dispatch(showLoginModal('forgot')),
    reset: () => dispatch(showLoginModal('reset')),
    hide: () => dispatch(hideLoginModal())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginModal)
)
