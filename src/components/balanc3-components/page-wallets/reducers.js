import { makeActionCreator } from '../../../utils';

export const $walletsReceived = 'WALLETS_RECEIVED';
export const walletsReceived = makeActionCreator($walletsReceived, 'wallets');

export const $requestWallets = 'REQUEST_WALLETS';
export const requestWallets = makeActionCreator($requestWallets);

export default (state = {}, action) => {
  switch (action.type) {
    case $walletsReceived:
      return {
        ...state,
        ...action.wallets,
      };
    default:
      return state;
  }
};

const dummyWalletData = [
  {
    _id: '0x23l4kj2l3k4jl2k3j4l2k3j1',
    name: 'name 1',
    address: '0xalsdkjfaosdia98sd9f87as9d8f',
    // createdDate: newDate,
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0xalsdkjfaosdia98sd9f87as9d8f',
    balance: '4.232534',
    wallet: '2',
  },
  {
    _id: '0x23l4kj2l3k4jl2k3j4l2k3j2',
    name: 'name 2',
    address: '0xa98s7df987a9ds8f7',
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0x0a980ds98f0a98sd0f98asdf',
    balance: '3.98876876',
    wallet: '1',
  },
  {
    _id: '0x23l4kj2l3k4jl2k3j4l2k3j3',
    name: 'name 3',
    address: '0x987087a0sdf98707333',
    tokenStandard: 'eth',
    tokenName: 'ether',
    tokenContract: '0x098as9df098a09sd8',
    balance: '3.756578',
    wallet: '1',
  },
];
export const getUserWallets = state => dummyWalletData;
// export const getUserWallets = state => state.wallets
