import React from 'react';
import styled from 'styled-components';
import InfoSection from '../Components/Organism/infoSection';
import Main from '../Components/Organism/main';
import { addRoom } from '../Helpers/requests';
import { FlexCenter } from '../Theme/mixins';
import { generateToken } from '../Helpers/token';

const StyledContainer = styled.div`
    ${FlexCenter};
    align-items: flex-start;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Home = () => {
    const handleClick = () => {
        // addRoom(234, 34, 22);
    } 

   
    return (
        <StyledContainer>
            <Main handleClick={()=> handleClick()}/>
            <InfoSection/>
        </StyledContainer>
    )
}

export default Home;