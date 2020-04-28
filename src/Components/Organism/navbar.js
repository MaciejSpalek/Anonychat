import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';
import Logo from '../Molecules/logo';
import Paragraph from '../Atoms/paragraph';


const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondaryGreen};
` 
const Navbar = () => {
    return (
        <StyledContainer>
            <Logo/>
            {/* <Paragraph 
                fontSize={({theme}) => theme.fontSizes.sm} 
                fontWeight={({theme}) => theme.fontWeights.bold} 
                color={({theme}) => theme.colors.primaryWhite}
                text={`Online: ${10}`} 
                margin={"0 0 0 1rem"}
                lineHeight={".9"}
            /> */}
        </StyledContainer>
    )
}

export default Navbar;