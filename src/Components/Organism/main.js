import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from '../../Theme/mixins';
import Header from '../Molecules/header';
import Button from '../Atoms/button';

const StyledContainer = styled.main`
    ${FlexColumn};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 70px;
    left: 0;
    height: calc(100vh - 70px - 30px);
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryWhite};
` 
const Main = ({ handleClick }) => {
    return (
        <StyledContainer>
           <Header />
           <Button text={"Draw"}  handleClick={()=> handleClick()}/>
        </StyledContainer>
    )
}

export default Main;