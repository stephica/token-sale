import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';

const SmallModal = styled(Modal)`
  &&&{
    @media (min-width: ${({ theme }) => theme.small}) {
      width: 400px;
      margin-left: -200px; // only left to not mess with Semantic UI
    }
  }
`;
export default SmallModal;
