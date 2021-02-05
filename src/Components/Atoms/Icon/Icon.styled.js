import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primaryRed};
`;
