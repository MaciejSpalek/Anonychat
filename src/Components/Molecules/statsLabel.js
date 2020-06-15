import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Icon from '../Atoms/icon';

const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    width: auto;
    padding: 1rem;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        width: 350px;
    }
`
const StyledText = styled.span`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: white;
    margin-left: .5rem;
    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        font-size: ${({theme}) => theme.fontSizes.lg};
    }
`

const StatsLabel = ({theme, icon, iconSize, text, variable}) => {
    return (
        <StyledContainer>
            <Icon 
                icon={icon}
                fontSize={iconSize}
                color={theme.colors.primaryRed}
            />
            <StyledText>
                {`${text}: ${variable}`}
            </StyledText>
        </StyledContainer>
    )
}

export default withTheme(StatsLabel);