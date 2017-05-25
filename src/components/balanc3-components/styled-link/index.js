import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: ${props => props.theme.primary}
`;

export default StyledLink;
