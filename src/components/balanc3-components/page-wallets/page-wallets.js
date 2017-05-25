import React from 'react'
import { Buffer } from '../../balanc3-components'
import { Button, Header } from 'semantic-ui-react'
import { getGroups } from './logic'
import WalletCard from './wallet-card'
import OverallCard from './overall-card'
import { func, object } from 'prop-types'
import styled from 'styled-components'

const Column = styled('div')`
  &&&{
    margin-bottom: 20px;
    @media (min-width: ${({ theme }) => theme.medium}) {
      width: 50%;
      &:first-of-type{
        // targets only the first Column
        margin-right: 20px;
      }
    }
  }
 `
const FlexManager = styled('div')`
  @media (min-width: ${({ theme }) => theme.medium}) {
    display: flex;
  }
`

const HeaderRow = styled('div')`
  display: flex;
  justify-content: space-between;
`

const WalletPage = ({ showNewAddressModal, showNewWalletModal, data }) => {
  const { userAddresses: addresses, userWallets: wallets } = data
  const groups = getGroups(addresses, wallets)
  const hasGroups = groups && !!groups.length
  return (
    <Buffer>
      <HeaderRow>
        <Header as="h2">Accounts</Header>
        <span>
          <Button onClick={showNewAddressModal} style={{ marginBottom: '20px' }}>
            Add Address
          </Button>
          <Button onClick={showNewWalletModal} style={{ marginBottom: '20px' }}>
            Create Group
          </Button>
        </span>
      </HeaderRow>
      {hasGroups &&
        <FlexManager gutter="20px">
          <Column>
            <OverallCard groups={groups} addresses={addresses} />
          </Column>
          <Column>
            {groups && groups.map((group, i) => <WalletCard key={i} wallet={group.wallet} addresses={group.addresses} />)}
          </Column>
        </FlexManager>}
      {/* groups:
      <p style={{ whiteSpace: 'pre' }}>{JSON.stringify(groups, null, '\t')}</p> */}
    </Buffer>
  )
}

WalletPage.propTypes = {
  showNewAddressModal: func,
  showNewWalletModal: func,
  data: object
}

export default WalletPage
