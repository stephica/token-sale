import { connect } from 'react-redux'
import { getUserWallets } from './reducers'
import { getUserToken } from '../account/reducers'
import { showNewAddressModal } from '../new-address-modal/reducers'
import { showNewWalletModal } from '../new-wallet-modal/reducers'
import WalletPage from './page-wallets'
import { graphql, gql } from 'react-apollo'
import { queryAddressesAndWallets } from '../../../queries'
function mapStateToProps(state, props) {
  return {
    _wallets: getUserWallets(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showNewAddressModal: () => dispatch(showNewAddressModal()),
    showNewWalletModal: () => dispatch(showNewWalletModal())
  }
}

const WalletPageWithData = graphql(gql`${queryAddressesAndWallets}`, {
  options: {
    fetchPolicy: 'network-only',
    variables: {
      token: getUserToken()
    }
  }
})(WalletPage)

export default connect(mapStateToProps, mapDispatchToProps)(WalletPageWithData)
