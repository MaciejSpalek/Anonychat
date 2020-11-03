import styled from 'styled-components';
import { FlexCenter } from 'Theme/mixins';
import Icon from 'Components/Atoms/Icon';

export const StyledContainer = styled.li`
    ${FlexCenter};
    justify-content: flex-start;
    width: auto;
    padding: 1rem;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        width: 350px;
    }
`
export const StyledText = styled.span`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: white;
    margin-left: .5rem;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        font-size: ${({theme}) => theme.fontSizes.lg};
    }
`

export const StyledIcon = styled(Icon)`
    font-size: ${({theme}) => theme.fontSizes.lg};
    color: ${({theme}) => theme.colors.primaryRed};`
