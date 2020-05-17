import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCenter } from '../Theme/mixins';
import { joinToRoom } from '../Helpers/requests';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomRoom, resetRandomRoom, getCurrentRoom } from '../Redux/Actions/actions';
import { getStorageItem } from '../Helpers/localStorage';

const StyledContainer = styled.div`
    ${FlexCenter};
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {
    const dispatch = useDispatch()
    const randomRoom = useSelector(state => state.rooms.randomRoom)
    const currentRoom = useSelector(state => state.rooms.currentRoom)
    const [ searchStatus, setSearchStatus ] = useState(false)

    const manageRoom = async () => {
        console.log("Status", searchStatus,"random", randomRoom)
        
        if(searchStatus && randomRoom.length) { // if exist some randomRoom
            console.log("Dochodzę do room'u")
            await joinToRoom(randomRoom[0].id, getStorageItem('user').id);
            saveCurrentRoom();
        } 
        
        else if(searchStatus && !randomRoom.length){ // unless
            console.log("Tworze room")
            createRoom()
        } 
        
        else {
            console.log("LOADING...")
        }
    }
    
    const searchEmptyRoom = async () => {
        if(!searchStatus) {
            await dispatch(getRandomRoom());
        }
        setSearchStatus(true);
    }
    
    const createRoom = () => {}

    const saveCurrentRoom = () => {
        dispatch(getCurrentRoom(randomRoom[0].id))
    }

    useEffect(() => {
        searchEmptyRoom();
        manageRoom();
    }, [searchStatus]);



    return (
        <StyledContainer>
            <div> {randomRoom.length ? `id roomu: ${randomRoom[0].id}`: "brak roomu"} </div>
            <Link to="/">WRÓĆ</Link>
        </StyledContainer>
    )
}

export default Chat;