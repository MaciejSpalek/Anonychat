import React from 'react'
import styled from 'styled-components';
import { FlexRow } from '../../Theme/mixins'


const StyledContainer = styled.div`
    ${FlexRow};
    height: 50px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondaryGreen};
` 
const Navbar = () => {
    return (
        <StyledContainer>

        </StyledContainer>
    )
}

export default Navbar;