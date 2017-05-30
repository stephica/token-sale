// import { connect } from 'react-redux'
import PreviewTx from './preview-tx'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import { queryBySender } from './actions'
import { valueTransfersModular } from '../../queries'

// function mapDispatchToProps(dispatch) {
//   return {
//     search: sender => {
//       dispatch(queryBySender(sender))
//     }
//   }
// }

// function mapStateToProps(state, props) {
//   return {
//     sender: state && state.getBySender && state.getBySender.sender
//   }
// }

// const getBySenderQuery = gql`query getBySender($sender: String!) {
//   getBySender(sender: $sender) {
//     sender,
//     recipient,
//     tokenStandard,
//     parentTrace
//   }
// }`

// const PreviewTxWithData = graphql(getBySenderQuery, {
//   options: props => {
//     return {
//       variables: {
//         sender: props.match.params.previewAddress || props.sender || ''
//       }
//     }
//   }
// })(PreviewTx)

const PreviewTxWithData = graphql(gql(valueTransfersModular), {
  options: props => {
    return {
      variables: {
        sender: props.match.params.previewAddress
      }
    }
  }
})(PreviewTx)

// export default connect(mapStateToProps, mapDispatchToProps)(PreviewTxWithData)
export default PreviewTxWithData
