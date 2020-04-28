import React from 'react';
import styled from 'styled-components';
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

const Logo = () => {
    return (
        <StyledContainer>
                <Icon 
                    icon={faUserSecret}
                    color={({theme}) => theme.colors.secondaryGray}  
                    fontSize={({theme}) => theme.fontSizes.xl}  
                />
                <StyledTextWrapper>
                    <Paragraph 
                        fontSize={({theme}) => theme.fontSizes.lg} 
                        fontWeight={({theme}) => theme.fontWeights.bold} 
                        color={({theme}) => theme.colors.secondaryGray}
                        text={"Anony"} 
                        margin={"0 0 0 1rem"}
                        lineHeight={".9"}
                    />
                    <Paragraph 
                        fontSize={({theme}) => theme.fontSizes.sm} 
                        fontWeight={({theme}) => theme.fontWeights.bold} 
                        color={({theme}) => theme.colors.primaryWhite}
                        text={"CHAT"} 
                        margin={"0 0 0 1rem"}
                        lineHeight={".9"}
                    />
                </StyledTextWrapper>
        </StyledContainer>
    )
}

export default Logo;