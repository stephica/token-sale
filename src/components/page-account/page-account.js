import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
  UpdateAccountForm as AccountTab,
  WalletPage as WalletTab,
} from '../balanc3-components';

export default class AccountPage extends Component {
  state = { activeItem: 'Wallets' };
  handleItemClick(e, { label }) {
    this.setState({ activeItem: label });
  }
  render() {
    const activeItem = this.state.activeItem;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Wallets"
            label="Wallets"
            active={activeItem === 'Wallets'}
            onClick={() => this.setState({ activeItem: 'Wallets' })}
          />
          <Menu.Item
            name="Profile"
            label="Info"
            active={activeItem === 'Info'}
            onClick={() => this.setState({ activeItem: 'Info' })}
          />
        </Menu>
        {activeItem === 'Wallets' && <WalletTab />}
        {activeItem === 'Info' && <AccountTab />}
      </div>
    );
  }
}
