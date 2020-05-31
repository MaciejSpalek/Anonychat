import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InfoSection from '../Components/Organism/InfoPanel';
import { FlexCenter } from '../Theme/mixins';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../SocketClient/socketClient'
import TokenGenerator from 'uuid-token-generator'

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
    const emptyRooms = useSelector(state => state.rooms.emptyRooms);
    const currentUserID = useSelector(state => state.users.currentUserID);
    
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

    const addSecondUserToRoom = (userID, room) => {
        room.users.push(userID);
        return room;
    }
    
    const getRoomObject = (userID) => {
        return {
            id: getToken(),
            users: [userID]
        }
    }
    
    const joinTheRoom = async (room) => {
        const modifiedRoom = await addSecondUserToRoom(currentUserID, room)
        socket.emit('join', modifiedRoom)
        console.log("Join to existing room")
    }

    const createRoom = () => {
        const room = getRoomObject(currentUserID);
        if(currentUserID) {
            console.log("Join to created room by me")
            socket.emit('join', room)
        } else {
            console.log("Still currentUserID doesn't exist!")
        }
    }
    
    const test = () => {
        console.log("test")
        emptyRooms.forEach(room => {
            console.log(room)
        })
    }
    const manageRoom = async () => {
        if(doesEmptyRoomExist()) {
            // await test()
            // console.log("Przefiltrowane roomy: ", emptyRooms.filter(room => !room.users.includes(currentUserID)))
            const room = getEmptyRoom()
            joinTheRoom(room)
        } else {
            createRoom()
        }
    }

    useEffect(()=> {
        manageRoom()
    }, [currentUserID])


    return (
        <StyledContainer>
            <InfoSection />
        </StyledContainer>
    )
}

export default Chat;