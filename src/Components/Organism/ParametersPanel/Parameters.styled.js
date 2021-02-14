import styled from 'styled-components';
import { FlexColumn, FlexCenter } from 'Theme/mixins';

export const StyledContainer = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    ${FlexColumn};
    justify-content: space-between;
    height: calc(100vh - 70px);
    width: 100%;
    font-size: 4rem;
    border-top: .25rem solid ${({theme}) => theme.colors.primaryWhite}; 
    background-color: ${({theme}) => theme.colors.primaryBlue};
    transition: .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: ${props => props.status  ? 'flex' : 'none'};
    z-index: ${props => props.status  ? 100 : 0};
`;

export const StyledParametersList = styled.ul`
    ${FlexColumn};
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        ${FlexCenter}; 
    }
`;

export const StyledEmptyWrapper = styled.div`
    display: none;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        display: unset;
    }
`;