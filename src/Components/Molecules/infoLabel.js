import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../Atoms/icon';
import { FlexCenter, FlexRow } from '../../Theme/mixins';

const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    padding: .5rem;
    background-color: ${({theme}) => theme.colors.primaryRed};
`
const StyledText = styled.span`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: white;
    margin-left: .5rem;
`
const StyledLink = styled.a`
    ${FlexRow};
    text-decoration: none;
    line-height: 1.6;
    &:hover {
        text-decoration: none;
    }
`

const InfoLabel = ({ theme, icon, iconSize }) => {
    return (
        <StyledContainer>
            <StyledLink href={"https://github.com/MaciejSpalek/ChatWithStrangers"}>
                <Icon 
                    icon={icon}
                    fontSize={iconSize}
                    color={theme.colors.primaryBlue}
                />
                <StyledText>
                    My Github
                </StyledText>
            </StyledLink>
        </StyledContainer>
    )
}

export default withTheme(InfoLabel);