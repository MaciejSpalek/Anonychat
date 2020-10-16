import React, { useEffect } from 'react';
import Header from '../../Components/Molecules/header';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { leaveTheRoom } from '../../Helpers/functions'
import { socket } from '../../SocketClient/socketClient';
import { StyledContainer } from './Home.styled';

const Home = () => {
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(()=> {
        leaveTheRoom(currentRoom, socket, dispatch);
    }, [location.pathname]);
    
    return (
        <StyledContainer>
            <Header />
        </StyledContainer>
    );
};

export default Home;