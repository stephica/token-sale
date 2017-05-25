import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const Circle = styled('div')`
  border-radius: 50%;
  border:${props => '1px solid ' + props.theme.white};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.primary}
`;
const Avatar = ({ user }) => {
  const base = user.name ? user.name : user.email;
  return <Circle>{base.charAt(0)}</Circle>;
};

Avatar.propTypes = {
  user: object,
};

export default Avatar;
