import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';

export const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100vh - 70px);
    width: 100%;
    padding: 1rem;
`;

export const StyledHeading = styled.h2`
    font-size: 2.5em;
    font-weight: bold;
    color: ${({theme}) => theme.colors.secondaryGray};
`;

export const StyledText = styled.span`
    font-size: 1.2em;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const StyledTextWrapper = styled.div`
    ${FlexCenter};
    flex-direction: column;
    margin-bottom: 1em;
`;