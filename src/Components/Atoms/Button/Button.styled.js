import styled from 'styled-components';
import { FlexCenter } from 'Theme/mixins';

export const StyledButton = styled.button`
    ${FlexCenter};
    height: 50px;
    width: 200px;
    border-radius: .5rem;
    font-size: ${({theme}) => theme.fontSizes.md};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.primaryRed};
    background-color: ${({theme}) => theme.colors.primaryBlue};
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    margin: ${props => props.margin};
    padding: .5rem;
`