const isMatchingOrBothNull = (a, b) => a === b || (!a && !b)

export const getTotalBalance = addresses => {
  if (addresses) {
    const total = addresses.map(el => Number(el.balance)).reduce((a, b) => Number(a) + Number(b), 0).toFixed(2)
    return total === 'NaN' ? '0.00' : total
  } else {
    return 0
  }
}

export const getGroups = (addresses = [], wallets = []) => {
  const WalletsWithNull = wallets.concat({ name: 'General', permanent: true })
  return WalletsWithNull.map(wallet => {
    return {
      wallet: wallet,
      addresses: addresses.filter(info => isMatchingOrBothNull(info.wallet, wallet._id))
    }
  })
}
