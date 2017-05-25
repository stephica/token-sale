import React from 'react'
import { bool, func, string } from 'prop-types'
import { Card, Form, Button } from 'semantic-ui-react'
import { ReduxFormInput, SmallModal, Ellipsis } from '../../balanc3-components'

class EditWalletModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: props.address || '',
      name: props.name || '',
      tokenStandard: 'eth'
    }
  }

  componentWillReceiveProps(props) {
    // console.log('props:', props)
    // console.log('state:', this.state)
    this.setState({ ...props })
  }

  render() {
    const { active, hide, updateAddress } = this.props
    const { address, name } = this.state

    const handleclick = e => {
      e.preventDefault()
      updateAddress({
        _id: this.props._id,
        name: this.state.name
      })
    }
    return (
      <SmallModal open={active} onClose={hide}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <span>Edit Address: </span>
              <Ellipsis style={{ fontSize: '12px', fontWeight: '100' }}>
                {address}
              </Ellipsis>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form>
              <ReduxFormInput
                overheadLabel="Address Name"
                input={{
                  value: name,
                  onChange: e => this.setState({ name: e.target.value })
                }}
              />
              <Button onClick={handleclick} color="green">Save</Button>
            </Form>
          </Card.Content>
        </Card>
      </SmallModal>
    )
  }
}

EditWalletModal.propTypes = {
  active: bool,
  hide: func,
  address: string,
  name: string,
  updateAddress: func
}

export default EditWalletModal
