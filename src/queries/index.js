import { graphqlUrl } from '../components/base/config'

export const queryUserWallets = 'query ($token: String!) {userWallets(token: $token) { _id, name }}'
export const queryAddressesAndWallets = `query ($token: String!) {
  userAddresses(token: $token) { _id, name, address, wallet, tokenContract, tokenStandard, balance } 
  userWallets(token: $token) { _id, name }
}`

export const addAddressMutation = 'mutation ($data: addAddressInputType!) { addAddress(data: $data) { _id name address tokenContract tokenStandard wallet } }'
export const mutateAddress = 'mutation ($data: updateAddressInputType!) { updateAddress(data: $data) { _id name } }'
export const deleteAddress = 'mutation ($data: deleteInputType!) { deleteAddress(data: $data) }'

export const addWallet = 'mutation ($data: addWalletsInputType!) { addWallet(data: $data) { _id name } }'
export const deleteWallet = 'mutation ($data: deleteInputType!) { deleteWallet(data: $data) }'

export const valueTransfersModular = 'query ($sender: String, $whereArgs: valueTransfersWhereArgs) { valueTransfers(sender: $sender, whereArgs: $whereArgs) {sender, recipient, tokenStandard, parentTrace, date} }'

export const graphCall = (query, variables, onSuccess, onError) => {
  fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'mutation ($data: updateWalletsInputType!) { updateWallet(data: $data) { _id name }}',
      variables: {
        data: variables
      }
    })
  })
    .then(res => res.json())
    .then(res => {
      if (!res.error) {
        onSuccess(res.data)
      } else {
        onError(res.error)
      }
    })
    .catch(onError)
}
