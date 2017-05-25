import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPerson } from './actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  render() {
    const { people } = this.props;

    return (
      <div>
        <PersonInput addPerson={this.props.addPerson} />
        <PeopleList people={people} />
      </div>
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  addPerson: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    people: state.people,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPerson: bindActionCreators(addPerson, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
