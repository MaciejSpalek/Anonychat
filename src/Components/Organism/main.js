import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Molecules/header';
import Button from '../Atoms/button';
import { FlexColumn } from '../../Theme/mixins';
import { getEmptyRooms } from '../../Helpers/requests';
import { setStorageItem } from '../../Helpers/localStorage';

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
    const [ currentRoom, setCurrentRoom ] = useState(null);
    
    

    // const manageRoom = () => {
    //     if(emptyRooms.length) {
    //         setStorageItem('room', emptyRooms[0])
    //         setCurrentRoom(emptyRooms[0])
    //     } 
    // }

    useEffect(()=> {
        // manageRoom();
    })
    
    return (
        <StyledContainer>
            <Header />
            <Button 
                handleClick={()=> {}}
                text={"Draw"}
            />
            
        </StyledContainer>
    )
}

export default Main;