import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../Atoms/icon';
import Paragraph from '../Atoms/paragraph';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FlexCenter, FlexColumn } from '../../Theme/mixins';


const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    width: auto;
`
const StyledTextWrapper = styled.div`
    ${FlexColumn};
    align-items: flex-start;
    justify-content: flex-start;
`

const Logo = ({theme}) => {

    return (
        <StyledContainer>
                <Icon 
                    icon={faUserSecret}
                    color={theme.colors.secondaryGray}  
                    fontSize={theme.fontSizes.xl}  
                />
                <StyledTextWrapper>
                    <Paragraph 
                        fontSize={theme.fontSizes.lg} 
                        fontWeight={theme.fontWeights.bold} 
                        color={theme.colors.secondaryGray}
                        text={"Anony"} 
                        margin={"0 0 0 1rem"}
                        lineHeight={".9"}
                    />
                    <Paragraph 
                        fontSize={theme.fontSizes.sm} 
                        fontWeight={theme.fontWeights.bold} 
                        color={theme.colors.primaryWhite}
                        text={"CHAT ..."} 
                        margin={"0 0 0 1rem"}
                        lineHeight={".9"}
                    />
                </StyledTextWrapper>
        </StyledContainer>
    )
}

export default withTheme(Logo);