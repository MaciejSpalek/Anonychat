import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../Theme/mixins';
import Header from '../Components/Molecules/header';
import Button from '../Components/Atoms/button';

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Home = () => {
    return (
        <StyledContainer>
            <Header />
            <Button 
                route={"chat"}
                handleClick={()=> {}}
                text={"Draw"}
            />
        </StyledContainer>
    )
}

export default Home;