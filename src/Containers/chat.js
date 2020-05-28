import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InfoSection from '../Components/Organism/InfoPanel';
import { FlexCenter } from '../Theme/mixins';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../SocketClient/socketClient'

const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};
`

const Chat = () => {
    const emptyRooms = useSelector(state => state.rooms.emptyRooms)

    const getEmptyRoom = () => {
        return emptyRooms[0]
    }

    const doesEmptyRoomExist = () => {
        return emptyRooms.length
    }

    const joinTheRoom = (room) => {
        socket.emit('join', room)
    }
    
    const createRoom = () => {
        socket.emit('join', socket.id)
    }
    
    const manageRoom = () => {
        if(doesEmptyRoomExist()) {
            const room = getEmptyRoom()
            joinTheRoom(room)
            console.log("Dochodzę do room'u")
        } else {
            createRoom()
            console.log("Tworzę room")
        }
    }

    useEffect(()=> {
        manageRoom()
    }, [])

    return (
        <StyledContainer>
            <InfoSection />
        </StyledContainer>
    )
}

export default Chat;