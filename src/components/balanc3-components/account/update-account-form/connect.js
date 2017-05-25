import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  logout,
  getUserToken,
  userReceived,
  getUser,
  showLoginModal,
} from '../reducers';
import AccountForm from './update-account-form';
import { gql, graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import { dispatch } from '../../../../utils';
import { updateAccountFormState, getUpdateAccountFormState } from './reducers';
const form = 'update-account';

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: e => {
      e.preventDefault();
      dispatch(showLoginModal());
    },
    dispatchReset: e => {
      e.preventDefault();
      dispatch(showLoginModal('reset'));
    },
    dispatchLogout: e => {
      e.preventDefault();
      dispatch(logout());
    },
  };
}

function mapStateToProps(state, props) {
  const user = getUser(state);
  return {
    user: user,
    formSuccess: getUpdateAccountFormState(state) === 'success',
  };
}

const userMutation = gql`mutation ($data: updateUserAuthsInputType!) { updateUserAuth(data: $data){ name, email, country, fiatCurrency } }`;

const AccountFormWithMutation = graphql(userMutation, {
  props: ({ mutate }) => ({
    updateUser: user => {
      // console.log('mutation called', user)
      try {
        delete user.token;
        delete user.__typename;
        delete user._id;
        delete user.createdDate;
        delete user.wallets;
        delete user.addresses;
      } catch (err) {
        console.log('error caught:', err);
      }
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...user,
          },
        },
      })
        .then(res => {
          dispatch(userReceived(res.data.updateUserAuth));
          dispatch(updateAccountFormState('success'));
          setTimeout(() => dispatch(updateAccountFormState('default')), 2000);
        })
        .catch(err => {
          console.error(err);
        });
    },
  }),
});

export default compose(
  AccountFormWithMutation,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form }),
  lifecycle({
    componentWillUpdate(nextProps) {
      // INITIAL UPDATE
      // console.log('Will Update:', nextProps.user)
      if (nextProps.user.email && !nextProps.initialized) {
        nextProps.initialize({ user: nextProps.user });
      }
    },
    componentWillMount() {
      // WHEN COMING FROM ANOTHER PAGE
      // console.log('Will Mount:', this.props.user)
      if (this.props.user.email && !this.props.initialized) {
        this.props.initialize({ user: this.props.user });
      }
    },
  })
)(AccountForm);
