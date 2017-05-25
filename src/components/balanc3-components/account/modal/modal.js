import React from 'react';
import { string, func } from 'prop-types';
import { Modal } from 'semantic-ui-react';
import {
  LoginForm,
  SignupForm,
  ResetPasswordForm,
  ForgotPasswordForm,
  Logo,
  SmallModal,
} from '../../../balanc3-components';
import styled from 'styled-components';

const BottomSection = styled('div')` margin-top: 30px; `;
const BottomLink = styled('p')` 
  margin: 0; 
  cursor: pointer;
  color: ${props => props.theme.lightGray}
`;

const LoginModal = ({ activeItem, signup, hide, login, forgot }) => (
  <SmallModal
    open={!!activeItem}
    onClose={hide}
    style={{ padding: 40, textAlign: 'center' }}
  >
    <Modal.Content>
      <Logo dark large style={{ padding: '30px', display: 'block' }} />
      {/* <h2 style={{ padding: '30px' }}>Balanc3</h2> */}
      {activeItem === 'login' && <LoginForm />}
      {activeItem === 'signup' && <SignupForm />}
      {activeItem === 'forgot' && <ForgotPasswordForm />}
      {activeItem === 'reset' && <ResetPasswordForm />}
      <BottomSection>
        {activeItem === 'login' &&
          <BottomLink onClick={signup}>Create New Account</BottomLink>}
        {activeItem !== 'login' &&
          <BottomLink onClick={login}>Login to Your Account</BottomLink>}
        {activeItem === 'login' &&
          <BottomLink onClick={forgot}>Forgot Password?</BottomLink>}
      </BottomSection>
    </Modal.Content>
  </SmallModal>
);

LoginModal.propTypes = {
  activeItem: string,
  signup: func,
  hide: func,
  forgot: func,
  login: func,
};

export default LoginModal;
