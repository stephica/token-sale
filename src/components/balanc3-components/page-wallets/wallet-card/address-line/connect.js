import { compose } from 'recompose'
import { graphql, gql } from 'react-apollo'
import AddressLine from './AddressLine'
import { getUserToken } from '../../../account/reducers'
import { deleteAddress, queryAddressesAndWallets } from '../../../../../queries'

const AddressLineWithDelete = graphql(gql`${deleteAddress}`, {
  props: ({ mutate }) => ({
    deleteAddress: _id => {
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

export default compose(AddressLineWithDelete)(AddressLine)
