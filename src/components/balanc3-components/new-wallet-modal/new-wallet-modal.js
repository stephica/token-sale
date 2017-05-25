import React, { Component } from 'react'
// import { bool, func } from 'prop-types'
import { Card, Form, Button } from 'semantic-ui-react'
import { ReduxFormInput, SmallModal } from '../../balanc3-components'

class NewGroupModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: props.address || '',
      name: props.name || '',
      tokenStandard: 'eth'
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ ...props })
  }

  render() {
    const { active, hide, addGroup } = this.props
    const { name } = this.state

    const handleclick = e => {
      e.preventDefault()
      addGroup(this.state.name)
    }
    return (
      <SmallModal open={active} onClose={hide}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Create New Group
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form>
              <ReduxFormInput
                overheadLabel="Group Name"
                input={{
                  value: name,
                  onChange: e => this.setState({ name: e.target.value })
                }}
              />
              <Button onClick={handleclick}>Save</Button>
            </Form>
          </Card.Content>
        </Card>
      </SmallModal>
    )
  }
}

export default NewGroupModal
