import React from 'react'
import { string, func, bool, shape, object, arrayOf } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import { Table } from 'semantic-ui-react'

const TxTable = ({ txs = [] }) => {
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Sender</Table.HeaderCell>
          <Table.HeaderCell>recipient</Table.HeaderCell>
          <Table.HeaderCell>token standard</Table.HeaderCell>
          <Table.HeaderCell>parent trace</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {txs.map((tx, i) => <Tx {...tx} key={i} />)}
      </Table.Body>
    </Table>)
}

const Tx = ({ sender, recipient, tokenStandard, parentTrace }) => (
  <Table.Row>
    <Table.Cell>{sender}</Table.Cell>
    <Table.Cell>{recipient}</Table.Cell>
    <Table.Cell>{ tokenStandard}</Table.Cell>
    <Table.Cell>{ parentTrace}</Table.Cell>
  </Table.Row>
  )
Tx.propTypes = {
  sender: string,
  recipient: string,
  tokenStandard: string,
  parentTrace: string
}

const GraphQl = ({ search, sender, data: { loading, getBySender, refetch } }) => {
  console.log('getBySender', getBySender)
  return (
    <Buffer>
      <h2>Value Transfer Preview</h2>
      <p>You must "watch" this address to get more than last 50 results</p>
      <div style={{ marginTop: '20px' }}>
        {getBySender &&
          !loading && <TxTable txs={getBySender} />
        }
        {loading && 'loading...'}
        {getBySender &&
          !getBySender.length &&
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
    getBySender: arrayOf(
      shape({
        sender: string,
        recipient: string,
        tokenStandard: string,
        parentTrace: string
      })
    )
  }).isRequired
}

export default GraphQl
