import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Message from './message';
import LoadingPanel from '../Organism/LoadingPanel';
import { isCurrentRoomFull } from '../../Helpers/functions';
import { FlexColumn } from '../../Theme/mixins';
import { useSelector } from 'react-redux';

const StyledContainer = styled.div`
    ${FlexColumn};
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
`

const ChatContent = () => {
    const messages = useSelector(state => state.rooms.roomMessages);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const loadingStatus = useSelector(state => state.statuses.loadingStatus);
    const messageWindowRef = useRef();
    
    const scrollToBottom = () => {
        messageWindowRef.current.scrollIntoView();
    }

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
        scrollToBottom()
    }, [messages.length])
    
    return (
        <StyledContainer>
             {loadingStatus ? <LoadingPanel /> : showMessages()  }
             <div ref={messageWindowRef} />
        </StyledContainer>
    )
}

export default ChatContent;