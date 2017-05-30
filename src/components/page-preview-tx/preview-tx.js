import React from 'react'
import { string, func, bool, shape, object, arrayOf } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import { Table } from 'semantic-ui-react'
import Moment from 'react-moment'

const TxTable = ({ txs = [] }) => {
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
        {txs.map((tx, i) => <Tx {...tx} key={i} />)}
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

const Tx = ({ date, sender, recipient, tokenStandard, parentTrace }) => (
  <Table.Row>
    <Table.Cell><Moment date={date} format="DD/MM/YY" /></Table.Cell>
    <Table.Cell>{sender}</Table.Cell>
    <Table.Cell>{recipient}</Table.Cell>
    <Table.Cell>{ tokenStandard}</Table.Cell>
    <Table.Cell>{ parentTrace}</Table.Cell>
  </Table.Row>
  )
Tx.propTypes = {
  sender: string,
  date: string,
  recipient: string,
  tokenStandard: string,
  parentTrace: string
}

const GraphQl = ({ search, sender, data: { loading, valueTransfers, refetch } }) => {
  console.log('valueTransfers:', valueTransfers)
  return (
    <Buffer>
      <h2>Value Transfer Preview</h2>
      <p>You must "watch" this address to get more than last 50 results</p>
      <div style={{ marginTop: '20px' }}>
        {valueTransfers &&
          !loading && <TxTable txs={valueTransfers} />
        }
        {loading && 'loading...'}
        {valueTransfers &&
          !valueTransfers.length &&
          !loading &&
          'No results, try searching for: 0xc7d3e431be6222543364408a94c12c0d089be305'}
      </div>
    </Buffer>
  )
}

GraphQl.propTypes = {
  sender: string,
  setAddress: func,
  search: func,
  data: shape({
    loading: bool,
    error: object,
    valueTransfers: arrayOf(
      shape({
        sender: string,
        date: string,
        recipient: string,
        tokenStandard: string,
        parentTrace: string
      })
    )
  }).isRequired
}

export default GraphQl
