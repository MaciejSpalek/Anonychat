import React, {useEffect} from 'react';
import styled from 'styled-components';
import Message from './message';
import { FlexColumn } from '../../Theme/mixins';
import { setRoomMessages } from '../../Redux/Actions/actions';
import { socket } from '../../SocketClient/socketClient';
import { useSelector, useDispatch } from 'react-redux';


const StyledContainer = styled.div`
    ${FlexColumn};
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
`

const ChatContent = () => {
    const messages = useSelector(state => state.rooms.roomMessages);
    const dispatch = useDispatch();

    const showMessages = () => {
        return messages.map((message, index) => {
            return (
                <Message 
                    key={index}
                    author={message.author}
                    text={message.text}
                />
            )
        })
    }

    useEffect(()=> {        
        socket.once('message', message => {
            dispatch(setRoomMessages(message))
        });
    }, [messages])

    return (
        <StyledContainer>
            {showMessages()}
        </StyledContainer>
    )
}

export default ChatContent;