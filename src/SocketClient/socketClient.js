import React from 'react';
import io from 'socket.io-client'
import { useDispatch } from 'react-redux';
import { getAllUsers, getCurrentUserID, setAllRooms, setEmptyRooms } from '../Redux/Actions/actions';


const ENDPOINT = 'http://localhost:5000/';
export const socket = io.connect(ENDPOINT);

const SocketClient = () => {
    const dispatch = useDispatch();

    socket.on('connect', () => {
        // console.log(`[socketClinet], update currentUserID`)
        dispatch(getCurrentUserID(socket.id))
    });
    

    socket.on('users', data => {
        // console.log(`[socketClinet], update all users`)
        const users = JSON.parse(data);
        dispatch(getAllUsers(users));
    });


    socket.on('allRooms', rooms => {
        // console.log(`[socketClinet], update all rooms: ${JSON.stringify(rooms)}`)
        dispatch(setAllRooms(rooms));
    });


    socket.on('emptyRooms', rooms => {
        // console.log(`[socketClinet], update empty rooms, ${JSON.stringify(rooms)}`)
        dispatch(setEmptyRooms(rooms));
    });

    
    return (<></>)
}


export default SocketClient;

