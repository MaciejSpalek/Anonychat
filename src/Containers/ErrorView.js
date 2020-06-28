import React from 'react';
import styled, { withTheme } from 'styled-components'
import IconButton from '../Components/Atoms/IconButton';
import { FlexCenter } from '../Theme/mixins';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100vh - 70px);
    width: 100%;
    padding: 1rem;
`
const Text = styled.h2`
    font-size: 2.5em;
    font-weight: bold;
    color: ${({theme}) => theme.colors.secondaryGray};
`
const Paragraph = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${({theme}) => theme.colors.secondaryGray};
`

const StyledTextWrapper = styled.div`
    ${FlexCenter};
    flex-direction: column;
    margin-bottom: 1em;
`

const ComponentError = ({ theme }) => {
    return (
        <StyledContainer>
            <StyledTextWrapper>
                <Text>This page</Text>
                <Paragraph>doesn't exist</Paragraph>
            </StyledTextWrapper>
            <Link to="/">
                <IconButton 
                    icon={faUndo}
                    color={theme.colors.secondaryGray}
                    fontSize={theme.fontSizes.xxl}
                    handleFunction={()=> {}}
                />
            </Link>
        </StyledContainer>
    )
}

export default withTheme(ComponentError);
