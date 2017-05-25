import React from 'react'
import { bool, func } from 'prop-types'
import { Sidebar, Menu, Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'
import OptionalLink from '../optional-link'

const SidebarLink = styled(OptionalLink)`
  &{
    color: ${props => props.theme.lighterGray};
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: ${props => '1px solid ' + props.theme.darkGray};
    &:hover{ color: ${props => props.theme.white}}
  }
`
const LayeredSidebar = styled(Sidebar)`
  &&&&{
    width: 90%;
    top: ${({ theme }) => theme.topBarHeight}px;
    z-index: ${({ theme }) => theme.sidebarZ};
  }
`
const LayeredDimmer = styled(Dimmer)`
  &&&&{
    opacity: .2;
    margin-top: ${({ theme }) => theme.topBarHeight}px;
    z-index: ${({ theme }) => theme.sidebarDimmerZ};
  }
`

const _Sidebar = ({ open, hide, login, loggedIn }) => (
  <span>
    <LayeredSidebar
      as={Menu}
      animation="overlay"
      direction="right"
      visible={open}
      vertical
      inverted
    >
      <div onClick={hide}>
        {!loggedIn && <SidebarLink onClick={login}>Login</SidebarLink>}
        {loggedIn && <SidebarLink to="/account">Account</SidebarLink>}
        {loggedIn && <SidebarLink to="/transactions">Transactions</SidebarLink>}
      </div>
    </LayeredSidebar>
    <LayeredDimmer active={open} onClickOutside={hide} page />
  </span>
)

_Sidebar.propTypes = {
  open: bool,
  loggedIn: bool,
  hide: func,
  login: func
}

export default _Sidebar
