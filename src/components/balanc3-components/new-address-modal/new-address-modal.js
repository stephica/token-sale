import React from 'react'
import { bool, func, string, object } from 'prop-types'
import { Card, Form, Button } from 'semantic-ui-react'
import { ReduxFormInput, SmallModal, ReduxFormDropdown } from '../../balanc3-components'

class NewAddressModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      name: '',
      wallet: '',
      tokenStandard: 'eth'
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ walletId: props.wallet && props.wallet._id })
  }

  render() {
    const { active, hide, addAddress, data } = this.props
    const { address, name } = this.state
    const { userWallets = [] } = data
    const walletsForSemantic = userWallets.map(wallet => {
      return {
        key: wallet._id,
        text: wallet.name,
        value: wallet._id
      }
    })

    const handleclick = e => {
      e.preventDefault()
      addAddress({
        name: this.state.name,
        wallet: this.state.walletId,
        address: this.state.address
      })
    }
    return (
      <SmallModal open={active} onClose={hide}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Add New Address
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form>
              <ReduxFormInput
                overheadLabel="New Address"
                input={{
                  value: address,
                  onChange: e => this.setState({ address: e.target.value })
                }}
              />
              <ReduxFormInput
                overheadLabel="Address Name"
                input={{
                  value: name,
                  onChange: e => this.setState({ name: e.target.value })
                }}
              />
              <ReduxFormDropdown
                overheadLabel="Choose Groop"
                options={walletsForSemantic}
                input={{
                  value: this.state.walletId || '',
                  onChange: newValue => this.setState({ walletId: newValue })
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

NewAddressModal.propTypes = {
  active: bool,
  hide: func,
  addAddress: func,
  address: string,
  wallet: object,
  name: string,
  data: object
}

export default NewAddressModal
