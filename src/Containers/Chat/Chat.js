import React, { useEffect } from 'react';
import TokenGenerator from 'uuid-token-generator';
import InfoPanel from 'Components/Organism/ChatBar/ChatBar';
import ChatWrapper from 'Components/Molecules/ChatWrapper';
import EndWrapper from 'Components/Molecules/EndWrapper';
import { socket } from 'SocketClient/socketClient';
import { StyledContainer } from './Chat.styled';
import { 
    setCurrentRoom, 
    resetAmountOfLetters, 
    setLoadingStatus, 
} from 'Redux/Actions/actions';
import { 
    useSelector, 
    useDispatch 
} from 'react-redux';
import { 
    leaveTheRoom, 
    getRandomIndex 
} from 'Helpers/functions';


const Chat = () => {
    const currentUserID = useSelector(state => state.users.currentUserID);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const emptyRooms = useSelector(state => state.rooms.emptyRooms);
    const converserLeftStatus = useSelector(state => state.statuses.converserLeftStatus);

    const dispatch = useDispatch();

    const getToken = () => {
        const token = new TokenGenerator(256, TokenGenerator.BASE62);
        return token.generate();
    };

    const getEmptyRoom = () => {
        const index = getRandomIndex(0, emptyRooms.length-1);
        return emptyRooms[index];
    };

    const doesEmptyRoomExist = () => {
        return emptyRooms.filter(room => !room.users.includes(currentUserID)).length;
    };
    
    const joinTheRoom = (room) => {
        const tempObject = {
            joiningUser: currentUserID,
            room: room
        };
        socket.emit('join', tempObject);
        dispatch(setCurrentRoom(room));
    }
    


    const createRoom = () => {
        const tempObject = {
            joiningUser: currentUserID,
            room: {
                id: getToken(),
                users: []
            }
        };

        if(currentUserID) {
            socket.emit('join', tempObject);
            dispatch(setCurrentRoom(tempObject.room));
        }
    };
    
    const manageRoom = () => {
        dispatch(setLoadingStatus(true));
        if(doesEmptyRoomExist()) {
            const room = getEmptyRoom();
            joinTheRoom(room);
        } else {
            createRoom();
        }
    };
    
    

    const clearInput = (inputName) => {
        inputName.value = "";
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const { messageInput } = e.target.elements;
        const messageObject = {
            author: currentUserID,
            text: messageInput.value,
            room: currentRoom
        }

        if(messageInput.value) {
            socket.emit("sendMessage", messageObject);
            clearInput(messageInput);
            dispatch(resetAmountOfLetters());
        }
    };


    const changeUser = () => {
        leaveTheRoom(currentRoom, socket, dispatch);
        manageRoom();
    };;

    useEffect(()=> {
        manageRoom();
    }, [currentUserID])

    return (
        <StyledContainer>
            <InfoPanel changeUser={changeUser} />
            {!converserLeftStatus ? 
                <ChatWrapper handleFunction={(e)=> sendMessage(e)} /> :
                <EndWrapper changeUser={changeUser} />}
        </StyledContainer>
    )
};

export default Chat;