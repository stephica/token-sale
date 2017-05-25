import { string } from 'prop-types';
import styled from 'styled-components';

const Ellipsis = styled('div')`
  width: ${props => props.width};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Ellipsis.propTypes = {
  width: string,
};

export default Ellipsis;
