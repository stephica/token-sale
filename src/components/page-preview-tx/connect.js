import PreviewTx from './preview-tx'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { valueTransfersModular } from '../../queries'

const PreviewTxWithData = graphql(gql(valueTransfersModular), {
  options: props => {
    return {
      variables: {
        sender: props.match.params.previewAddress,
        whereArgs: {
          count: 50
        }
      }
    }
  }
})(PreviewTx)

export default PreviewTxWithData
