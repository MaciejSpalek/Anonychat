import Paragraph from 'Components/Atoms/Paragraph';
import styled from 'styled-components';
import Icon from 'Components/Atoms/Icon/Icon';
import { FlexCenter, FlexColumn } from 'Theme/mixins';

export const StyledContainer = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  width: auto;
`;
export const StyledTextWrapper = styled.div`
  ${FlexColumn};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primaryRed};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  color: ${({ theme }) => theme.colors.primaryRed};
  margin: 0 0 0 1rem;
  line-height: 0.9;

  :first-of-type {
    font-size: 30px;
  }
  :last-of-type {
    font-size: 20px;
  }
`;

export const StyledIcon = styled(Icon)`
    color: ${({theme}) => theme.colors.primaryRed};
    font-size: 45px;
`;
