import React from 'react'
import { string } from 'prop-types'
import { Row } from '../../../../balanc3-components'
import { Icon } from 'semantic-ui-react'
import { dispatch } from '../../../../../utils'
import { showEditWalletModal } from '../../../edit-wallet-modal/reducers'
import styled from 'styled-components'

const Ellipsis = styled('span')`
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const AddressRow = styled(Row)`
  padding: 15px 0;
  border-bottom: 1px solid lightGray;
`

const AddressLine = addressInfo => {
  const { name, address, balance, tokenStandard, deleteAddress, _id } = addressInfo
  const callDelete = () => deleteAddress(_id)
  const showEditAddressModal = () => dispatch(showEditWalletModal(addressInfo))
  return (
    <AddressRow justifyContent="space-between">
      <Ellipsis style={{ width: '20%' }}> {name} </Ellipsis>
      <Ellipsis style={{ width: '50%' }}> {address} </Ellipsis>
      <Ellipsis style={{ width: '10%', textTransform: 'uppercase' }}>
        {' '}{`${balance || '0'} ${tokenStandard || 'eth'}`}{' '}
      </Ellipsis>
      <span style={{ width: '11%', textAlign: 'right', color: 'lightGray' }}>
        <Icon name="edit" onClick={showEditAddressModal} style={{ cursor: 'pointer' }} />
        <Icon name="trash" onClick={callDelete} style={{ cursor: 'pointer' }} />
      </span>
    </AddressRow>
  )
}
AddressLine.propTypes = {
  name: string,
  address: string,
  balance: string,
  tokenStandard: string,
  tokenName: string
}

export default AddressLine
