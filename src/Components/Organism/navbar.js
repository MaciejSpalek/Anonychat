import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Logo from '../Molecules/logo';
import Paragraph from '../Atoms/paragraph';


const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondaryGreen};
` 
const Navbar = () => {
    return (
        <StyledContainer>
            <Logo/>
        </StyledContainer>
    )
}

export default Navbar;