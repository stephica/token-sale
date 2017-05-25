import { connect } from 'react-redux';
import { getSidebarState, hideSidebar } from './reducers';
import { showLoginModal } from '../account/modal/reducers';
import { isLoggedIn } from '../account/reducers';
import Sidebar from './sidebar';

function mapStateToProps(state, props) {
  return {
    open: getSidebarState(state),
    loggedIn: isLoggedIn(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => {
      dispatch(hideSidebar());
    },
    login: () => {
      dispatch(showLoginModal('login'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
