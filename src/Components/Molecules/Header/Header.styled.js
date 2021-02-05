import Paragraph from 'Components/Atoms/Paragraph';
import styled from 'styled-components';
import { FlexCenter, FlexColumn } from 'theme/mixins';


export const StyledContainer = styled.header`
  ${FlexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  margin-bottom: 2rem;
`;

export const StyledHeading = styled.h1`
  ${FlexColumn};
  align-items: center;
`;

export const StyledParagraph = styled(Paragraph)`
    color: ${({theme}) => theme.colors.primaryBlue};
    font-weight: bold;
    
    :first-of-type {
        font-size: 40px;
    }
    :last-of-type {
        font-size: 30px;
    }
`;

