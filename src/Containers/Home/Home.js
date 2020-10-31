import React, { useEffect } from 'react';
import Header from 'Components/Molecules/Header';
import LoadingPanel from 'Components/Organism/LoadingPanel';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { leaveTheRoom } from 'Helpers/functions'
import { socket } from 'SocketClient/socketClient';
import { StyledContainer } from './Home.styled';
import { isTheServerConnected } from 'Helpers/functions';

const Home = () => {
    const amountOfUsers = useSelector((state) => state.users.allUsers.length);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(()=> {
        leaveTheRoom(currentRoom, socket, dispatch);
    }, [location.pathname]);
    
    return (
      <StyledContainer>
        {isTheServerConnected(amountOfUsers) ? <Header /> : <LoadingPanel description='Connecting...' />}
      </StyledContainer>
    );
};

export default Home;