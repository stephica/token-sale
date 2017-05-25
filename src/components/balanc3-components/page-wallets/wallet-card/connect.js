import { compose } from 'recompose'
import { graphql, gql } from 'react-apollo'
import WalletCard from './wallet-card'
import { getUserToken } from '../../account/reducers'
import { deleteWallet, queryAddressesAndWallets } from '../../../../queries'

const AddressLineWithDelete = graphql(gql`${deleteWallet}`, {
  props: ({ mutate }) => ({
    deleteWallet: _id => {
      console.log('update mutation called', _id)
      mutate({
        variables: {
          data: {
            token: getUserToken(),
            _id
          }
        },
        refetchQueries: [
          {
            query: gql`${queryAddressesAndWallets}`,
            variables: { token: getUserToken() }
          }
        ]
      }).catch(err => {
        console.error(err)
      })
    }
  })
})

export default compose(AddressLineWithDelete)(WalletCard)
