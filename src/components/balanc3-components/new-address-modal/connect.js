import { connect } from 'react-redux'
import { compose } from 'recompose'
import { graphql, gql } from 'react-apollo'
import { getModalState, getWalletInfo, hideNewAddressModal } from './reducers'
import NewAddressModal from './new-address-modal'
import { getUserToken } from '../account/reducers'
import { queryAddressesAndWallets, addAddressMutation, queryUserWallets } from '../../../queries'
import { dispatch } from '../../../utils'

function mapStateToProps(state, props) {
  const walletInfo = getWalletInfo(state)
  return {
    active: getModalState(state),
    wallet: walletInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideNewAddressModal())
  }
}

const userWallets = graphql(gql`${queryUserWallets}`, {
  options: {
    variables: {
      token: getUserToken()
    }
  }
})

const walletModalWithAddressMutation = graphql(gql`${addAddressMutation}`, {
  props: ({ mutate }) => ({
    addAddress: newAddressInfo => {
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            ...newAddressInfo
          }
        },
        refetchQueries: [
          {
            query: gql`${queryAddressesAndWallets}`,
            variables: { token: getUserToken() }
          }
        ]
      })
        .then(res => {
          console.log('response from mutation:', res)
          dispatch(hideNewAddressModal())
        })
        .catch(err => {
          console.error(err)
        })
    }
  })
})

export default compose(walletModalWithAddressMutation, userWallets, connect(mapStateToProps, mapDispatchToProps))(NewAddressModal)

// export default connect(mapStateToProps, mapDispatchToProps)(WalletModal)
