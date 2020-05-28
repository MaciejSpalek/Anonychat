import React from 'react';
import io from 'socket.io-client'
import { useDispatch } from 'react-redux';
import { getAllUsers, getCurrentUserID, getRooms } from '../Redux/Actions/actions';


const ENDPOINT = 'http://localhost:5000/';
export const socket = io.connect(ENDPOINT);

const SocketClient = () => {
    const dispatch = useDispatch();

    socket.on('connect', () => {
        dispatch(getCurrentUserID(socket.id))
    });
    
    socket.on('users', data => {
        const users = JSON.parse(data);
        dispatch(getAllUsers(users));
    });

    socket.on('rooms', data => {
        const rooms = data;
        dispatch(getRooms(rooms));
    });

    return (<></>)
}


export default SocketClient;

