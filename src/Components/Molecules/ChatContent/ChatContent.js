import React, { useEffect, useRef } from 'react';
import Message from '../message';
import LoadingPanel from '../../Organism/LoadingPanel';
import { useSelector } from 'react-redux';
import { StyledContainer } from './ChatContent.styled'

const ChatContent = () => {
    const messages = useSelector(state => state.rooms.roomMessages);
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
            { loadingStatus ? <LoadingPanel description="Wait for user" /> : showMessages() }
             <div ref={messageWindowRef} />
        </StyledContainer>
    )
}

export default ChatContent;