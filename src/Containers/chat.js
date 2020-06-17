import React, { useEffect } from 'react';
import styled from 'styled-components';
import TokenGenerator from 'uuid-token-generator';
import InfoPanel from '../Components/Organism/InfoPanel';
import ChatWrapper from '../Components/Organism/ChatWrapper';

import { setCurrentRoom, resetAmountOfLetters } from '../Redux/Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../SocketClient/socketClient';
import { FlexCenter } from '../Theme/mixins';
import { leaveTheRoom } from '../Helpers/functions'

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};

    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        max-width: 768px;
        height: calc(100vh - 70px);
        top: 70px;
        left: 50%;
        transform: translate(-50%, 0);
    }
`

const Chat = () => {
    const currentUserID = useSelector(state => state.users.currentUserID);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const emptyRooms = useSelector(state => state.rooms.emptyRooms);
    const dispatch = useDispatch();


    const getToken = () => {
        const token = new TokenGenerator(256, TokenGenerator.BASE62);
        return token.generate()
    }

    const getEmptyRoom = () => {
        return emptyRooms[0]
    }

    const doesEmptyRoomExist = () => {
        return emptyRooms.filter(room => !room.users.includes(currentUserID)).length
    }
    
    const joinTheRoom = (room) => {
        const tempObject = {
            joiningUser: currentUserID,
            room: room
        }
        socket.emit('join', tempObject)
        dispatch(setCurrentRoom(room))
        console.log("Join to existing room", currentUserID, room)
    }
    


    const createRoom = () => {
        const tempObject = {
            joiningUser: currentUserID,
            room: {
                id: getToken(),
                users: []
            }
        }

        if(currentUserID) {
            console.log("Join the room created by me")
            socket.emit('join', tempObject);
            dispatch(setCurrentRoom(tempObject.room))
        } else {
            console.log("Still currentUserID doesn't exist!")
        }
    }
    
    const manageRoom = () => {
        if(doesEmptyRoomExist()) {
            const room = getEmptyRoom();
            joinTheRoom(room);
        } else {
            createRoom();
        }
    }
    
 

    const clearInput = (inputName) => {
        inputName.value = "";
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const { messageInput } = e.target.elements;
        const messageObject = {
            author: currentUserID,
            text: messageInput.value,
            room: currentRoom
        }

        
        if(messageInput.value) {
            socket.emit("sendMessage", messageObject)
            clearInput(messageInput);
            dispatch(resetAmountOfLetters())
        }
    }


    const changeUser = () => {
        console.log("Change user")
        // leave the room
        // join to some room or create own room
    }

    useEffect(()=> {
        manageRoom()
    }, [currentUserID])

    
    return (
        <StyledContainer>
            <InfoPanel changeUser={()=> {changeUser()}} />
            <ChatWrapper handleFunction={(e)=> sendMessage(e)} /> 
        </StyledContainer>
    )
}

export default Chat;