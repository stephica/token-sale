import { connect } from 'react-redux';
import Graphql from './graphql';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { queryBySender } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    search: sender => {
      dispatch(queryBySender(sender));
    },
  };
}

function mapStateToProps(state, props) {
  return {
    sender: state && state.getBySender && state.getBySender.sender,
  };
}

const getBySenderQuery = gql`query getBySender($sender: String!) { 
  getBySender(sender: $sender) {
    sender,
    recipient,
    tokenStandard, 
    parentTrace
  } 
}`;

const GraphqlWithData = graphql(getBySenderQuery, {
  options: props => {
    return {
      fetchPolicy: 'network-only',
      variables: {
        sender: props.sender || '',
      },
    };
  },
})(Graphql);
export default connect(mapStateToProps, mapDispatchToProps)(GraphqlWithData);
