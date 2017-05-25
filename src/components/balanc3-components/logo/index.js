import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled('span')`
  color: ${props => props.light ? props.theme.white : props.theme.dark};
  font-size: ${props => props.large ? '22px' : 'normal'};
`;

const Logo = props => (
  <StyleWrapper {...props}>
    Balanc3
  </StyleWrapper>
);

Logo.propTypes = {
  type: string,
  large: bool,
  light: bool,
  dark: bool,
};

export default Logo;
