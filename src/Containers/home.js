import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../Theme/mixins'

const StyledContainer = styled.div`
    ${FlexCenter};
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Home = () => {
    return (
        <StyledContainer>
           
        </StyledContainer>
    )
}

export default Home;