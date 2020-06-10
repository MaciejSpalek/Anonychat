import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FlexRow, FlexCenter } from '../../Theme/mixins';
import Icon from '../Atoms/icon';

const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    padding: 1rem;
`
const StyledText = styled.span`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: white;
    margin-left: .5rem;
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