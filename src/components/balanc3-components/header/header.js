import React from 'react';
import { object, func, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-responsive';
import { Logo, Avatar } from '../../balanc3-components';
import { screenSizes } from '../../base/theme';
import { Icon } from 'semantic-ui-react';

const HeaderSpace = styled('div')`
  height: ${({ theme }) => theme.topBarHeight}px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderRow = styled(HeaderSpace)`
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  top: 0;
  padding: 20px;
  z-index: ${props => props.theme.headerZ};
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  color: ${props => props.theme.white};
  margin-right: 20px;
  &:hover{
    text-decoration: none;
    color: ${props => props.theme.white};
  }
`;

const Header = props => {
  const { user, sidebarOpen, showSidebar, hideSidebar, showLoginModal } = props;
  const isUser = !!Object.keys(user).length;
  return (
    <div>
      <HeaderSpace />
      <Media minWidth={screenSizes.small}>
        {isSmall => (
          <HeaderRow alignItems="center">
            <div>
              <HeaderLink to="/" style={{ margin: '0 60px 0 0' }}>
                <Logo light />
              </HeaderLink>
              {isSmall && <HeaderLink to="/account">Account</HeaderLink>}
              {/* {isSmall && <HeaderLink to="/redux">Redux</HeaderLink>} */}
              {isSmall &&
                <HeaderLink to="/transactions">Transactions</HeaderLink>}
            </div>
            <div>
              <Media minWidth={screenSizes.small}>
                {isUser &&
                  <HeaderLink to="/account">
                    {' '}<Avatar style={{ margin: 0 }} user={user} />
                  </HeaderLink>}
                {!isUser &&
                  <span
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={showLoginModal}
                  >
                    {' '}Login{' '}
                  </span>}
              </Media>
              <Media
                maxWidth={screenSizes.small}
                onClick={sidebarOpen ? hideSidebar : showSidebar}
                style={{ cursor: 'pointer' }}
              >
                <Icon
                  name={sidebarOpen ? 'close' : 'content'}
                  style={{ color: 'white' }}
                />
                <span style={{ color: 'white' }} onClick={showSidebar}>
                  {sidebarOpen ? 'Close' : 'Menu'}
                </span>
              </Media>
            </div>
          </HeaderRow>
        )}
      </Media>
    </div>
  );
};

Header.propTypes = {
  user: object,
  sidebarOpen: bool,
  showSidebar: func,
  hideSidebar: func,
  showLoginModal: func,
};

export default Header;
