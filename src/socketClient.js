import React from 'react';
import io from 'socket.io-client'
import { useDispatch } from 'react-redux';
import { getAllUsers, getCurrentUserID } from './Redux/Actions/actions';


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

    
    

    return (
        <></>
    )
}


export default SocketClient;

