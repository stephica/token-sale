import React from 'react'
import { Table } from 'semantic-ui-react'
import { string, shape, arrayOf, array } from 'prop-types'
import Moment from 'react-moment'
import { Ellipsis } from '../../balanc3-components'
import styled from 'styled-components'
import eth from 'ethjs'

const BaseCell = styled(Table.Cell)`
  max-width: 100px;
`

const TxTable = ({ txs = [], ownedAddresses }) => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Tx</Table.HeaderCell>
          <Table.HeaderCell>Direction</Table.HeaderCell>
          <Table.HeaderCell>From / To</Table.HeaderCell>
          <Table.HeaderCell>Asset</Table.HeaderCell>
          <Table.HeaderCell>Currency</Table.HeaderCell>
          <Table.HeaderCell>Exchange</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {txs.map((tx, i) => <Tx {...tx} key={i} ownedAddresses={ownedAddresses} />)}
      </Table.Body>
    </Table>)
}

TxTable.propTypes = {
  txs: arrayOf(
      shape({
        sender: string,
        date: string,
        recipient: string,
        tokenStandard: string,
        parentTrace: string
      })
    )
}

const Tx = ({ date, sender, recipient, tokenStandard, currency, exchange, value, ownedAddresses }) => {
  const isSender = ownedAddresses.includes(sender)
  // install web3 or ethjs
  return (
    <Table.Row>
      <BaseCell><Moment date={date} format="DD/MM/YY" /></BaseCell>
      <BaseCell><Ellipsis>{sender}</Ellipsis></BaseCell>
      <BaseCell>{isSender ? 'out' : 'in'}</BaseCell>
      <BaseCell><Ellipsis>{ isSender ? recipient : sender }</Ellipsis></BaseCell>
      <BaseCell>{ eth.fromWei(value, 'ether') + tokenStandard || ' ETH'}</BaseCell>
      <BaseCell>{ currency || '$10'}</BaseCell>
      <BaseCell>{ exchange || '$190'}</BaseCell>
    </Table.Row>
  )
}

Tx.propTypes = {
  sender: string,
  currency: string,
  exchange: string,
  ownedAddresses: array,
  date: string,
  recipient: string,
  tokenStandard: string,
  parentTrace: string
}

export default TxTable
