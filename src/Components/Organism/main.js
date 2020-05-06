import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Molecules/header';
import Button from '../Atoms/button';
import { Redirect } from 'react-router-dom';
import { FlexColumn } from '../../Theme/mixins';
import { getEmptyRooms } from '../../Helpers/requests';

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
const Main = () => {
    const [ emptyRooms, setEmptyRooms ] = useState([]);
    const searchRoom = () => {
        // getEmptyRooms().then(({data}) => setEmptyRooms(data));
        // console.log(emptyRooms)
        return (
            <Redirect to="chat" />
        )
    }
    

    return (
        <StyledContainer>
            <Header />
            <Button 
                text={"Draw"}  
                handleClick={()=> searchRoom()}
            />
        </StyledContainer>
    )
}

export default Main;