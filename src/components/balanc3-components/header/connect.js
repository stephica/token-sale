import { connect } from 'react-redux';
import { getUser, getUserToken } from '../account/reducers';
import { showSidebar, hideSidebar, getSidebarState } from '../sidebar/reducers';
import { showLoginModal } from '../account/modal/reducers';
import Header from './header';

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => dispatch(showSidebar()),
    hideSidebar: () => dispatch(hideSidebar()),
    showLoginModal: () => dispatch(showLoginModal()),
  };
}

function mapStateToProps(state, props) {
  const user = getUser(state);
  return {
    user: user,
    userToken: getUserToken(state),
    sidebarOpen: getSidebarState(state),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
