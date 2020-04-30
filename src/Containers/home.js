import React from 'react';
import styled from 'styled-components';
import InfoSection from '../Components/Organism/infoSection';
import Main from '../Components/Organism/main';
import { FlexCenter } from '../Theme/mixins'

const StyledContainer = styled.div`
    ${FlexCenter};
    align-items: flex-start;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Home = () => {
    const handleButton = () => {
        
    }


    return (
        <StyledContainer>
            <Main handleButton={()=> handleButton()}/>
            <InfoSection />
        </StyledContainer>
    )
}

export default Home;