import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Components/Molecules/header';
import Button from '../Components/Atoms/button';
import { FlexCenter } from '../Theme/mixins';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { leaveTheRoom } from '../Helpers/functions'
import { socket } from '../SocketClient/socketClient';

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Home = () => {
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(()=> {
        leaveTheRoom(currentRoom, socket, dispatch);
    }, [location.pathname])
    
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