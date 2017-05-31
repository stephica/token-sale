import React from 'react'
import { string, func, bool, shape, object, arrayOf } from 'prop-types'
import { Buffer, TxTable, Row } from '../balanc3-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const GraphQl = ({ search, sender, data: { loading, valueTransfers, refetch }, match: { params } }) => {
  return (
    <Buffer>
      <h2>Value Transfer Preview</h2>
      <Row justifyContent="space-between" alignItems="center">
        <span>You must "watch" this address to get more than last 50 results</span>
        <Link to="/account"><Button primary>Manage Accounts</Button></Link>
      </Row>
      <div style={{ marginTop: '20px' }}>
        {valueTransfers && !loading && <TxTable txs={valueTransfers} ownedAddresses={[params.previewAddress]} /> }
        {loading && 'loading...'}
        {valueTransfers &&
          !valueTransfers.length &&
          !loading &&
          'No results, try searching for: 0xc7d3e431be6222543364408a94c12c0d089be305 or 0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5'}
      </div>
    </Buffer>
  )
}

GraphQl.propTypes = {
  sender: string,
  setAddress: func,
  search: func,
  match: object,
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
