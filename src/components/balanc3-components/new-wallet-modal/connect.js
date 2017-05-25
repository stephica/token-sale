import { connect } from 'react-redux';
import { compose } from 'recompose';
import { graphql, gql } from 'react-apollo';
import { getModalState, getWalletInfo, hideNewWalletModal } from './reducers';
import NewWalletModal from './new-wallet-modal';
import { getUserToken } from '../account/reducers';
import { queryAddressesAndWallets, addWallet } from '../../../queries';
import { dispatch } from '../../../utils';

function mapStateToProps(state, props) {
  const walletInfo = getWalletInfo(state);
  return {
    active: getModalState(state),
    ...walletInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideNewWalletModal()),
  };
}

const walletModalWithAddressMutation = graphql(gql`${addWallet}`, {
  props: ({ mutate }) => ({
    addGroup: name => {
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            name: name,
          },
        },
        refetchQueries: [
          {
            query: gql`${queryAddressesAndWallets}`,
            variables: { token: getUserToken() },
          },
        ],
      })
        .then(res => {
          console.log('response from mutation:', res);
          dispatch(hideNewWalletModal());
        })
        .catch(err => {
          console.error(err);
        });
    },
  }),
});

export default compose(
  walletModalWithAddressMutation,
  connect(mapStateToProps, mapDispatchToProps)
)(NewWalletModal);

// export default connect(mapStateToProps, mapDispatchToProps)(WalletModal)
