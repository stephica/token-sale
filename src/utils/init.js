import { dispatch } from '../utils'
import baseStyles from '../components/base/base-styles'
import {
  getUserToken,
  userReceived,
  showLoginModal
} from '../components/balanc3-components/account/reducers'
import { graphqlUrl } from '../components/base/config'

export default () => {
  // CHECKS IF USER IS AUTHENTICATED
  const userToken = getUserToken() || ''
  if (userToken) {
    fetch(graphqlUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: 'query ($token: String!) { userAuth(token: $token) {_id, name, email, createdDate, country, fiatCurrency } }',
        variables: {
          token: userToken
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          console.error('error:', res.errors[0])
        } else {
          dispatch(userReceived(res.data.userAuth))
        }
      })
  }

  // CHECKS IF WE SHOULD DISPATCH SPECIAL NON-ROUTE ACTION
  const path = window.location.pathname
  if (path.includes('reset')) {
    dispatch(showLoginModal('reset'))
  } else if (path.includes('signup')) {
    dispatch(showLoginModal('signup'))
  } else if (path.includes('login')) {
    dispatch(showLoginModal('login'))
  }

  // DOES BASE STYLES FOR SEMANTIC UI
  baseStyles()
}
