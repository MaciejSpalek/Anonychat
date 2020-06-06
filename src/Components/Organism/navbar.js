import React from 'react';
import styled from 'styled-components';
import Logo from '../Molecules/logo';
import { FlexCenter } from '../../Theme/mixins';


const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryBlue};
` 

const Navbar = () => {
    return (
        <StyledContainer>
            <Logo />
        </StyledContainer>
    )
}

export default Navbar;