import React, {useEffect} from 'react';
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux';
import { 
    getAllUsers, 
    getCurrentUserID, 
    setCurrentRoom , 
    setAllRooms, 
    setEmptyRooms,
    resetRoomMessages,
    setRoomMessages,
    setLoadingStatus,
    resetCurrentRoom,
    setConverserLeftStatus
} from '../Redux/Actions/actions';

const ENDPOINT = 'https://chatwithstrangersserver.herokuapp.com/';

export const socket = io.connect(ENDPOINT);

const SocketClient = () => {
    const currentUsersRoom = useSelector(state => state.rooms.currentRoom.users.length);
    const currentRoomID = useSelector(state => state.rooms.currentRoom.id);
    const currentUserID = useSelector(state => state.users.currentUserID)
    const dispatch = useDispatch();

    socket.on('connect', () => {
        dispatch(getCurrentUserID(socket.id))
    });
    
    socket.on('users', data => {
        const users = JSON.parse(data);
        dispatch(getAllUsers(users));
    });

    socket.once('room', room => {
        if(room && room.users.includes(currentUserID)) {
            console.log("ustawiam room")
            dispatch(setCurrentRoom(room));
        }
    });

    socket.on('removingRoom', object => {
        const { roomID, stayingUser } = object;
        if(currentRoomID === roomID) {
            dispatch(resetCurrentRoom());
            if(stayingUser === currentUserID) {
                dispatch(setConverserLeftStatus(true))
            }
        }
    });

    socket.on('allRooms', rooms => {
        dispatch(setAllRooms(rooms));
    });

    socket.on('emptyRooms', rooms => {
        dispatch(setEmptyRooms(rooms));
    });

    useEffect(()=> {
        if(currentUsersRoom === 2) {
            dispatch(setLoadingStatus(false))
            dispatch(resetRoomMessages());
        }
    }, [currentUsersRoom])

    useEffect(()=> {        
        socket.on('message', message => {
            dispatch(setRoomMessages(message))
        });
    }, [])

   
    return (<></>)
}


export default SocketClient;

