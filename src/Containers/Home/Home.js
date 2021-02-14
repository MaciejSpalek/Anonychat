import React, { useEffect } from 'react';
import Header from 'Components/Molecules/Header';
import LoadingPanel from 'Components/Organism/LoadingPanel';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from 'SocketClient/socketClient';
import { StyledContainer } from './Home.styled';
import { isTheServerConnected, leaveTheRoom } from 'Helpers/functions';

const Home = () => {
    const amountOfUsers = useSelector((state) => state.users.allUsers.length);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(()=> {
        leaveTheRoom(currentRoom, socket, dispatch);
    }, [location.pathname, currentRoom, dispatch]);
    
    return (
      <StyledContainer>
        {isTheServerConnected(amountOfUsers) ? <Header /> : <LoadingPanel description='Connecting...' />}
      </StyledContainer>
    );
};

export default Home;