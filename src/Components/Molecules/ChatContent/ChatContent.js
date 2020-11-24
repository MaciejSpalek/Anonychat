import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import LoadingPanel from 'Components/Organism/LoadingPanel/LoadingPanel';
import { useSelector } from 'react-redux';
import { StyledContainer } from './ChatContent.styled';

const ChatContent = () => {
  const messages = useSelector((state) => state.rooms.roomMessages);
  const loadingStatus = useSelector((state) => state.statuses.loadingStatus);
  const messageWindowRef = useRef();

  const scrollToBottom = () => {
    messageWindowRef.current.scrollIntoView();
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <StyledContainer>
      {loadingStatus ? (
        <LoadingPanel description='Wait for user' />
      ) : (
        messages.map(({author, text}, index) => 
            <Message 
                key={index} 
                author={author} 
                text={text}
            />
        ))}
      <div ref={messageWindowRef} />
    </StyledContainer>
  );
};

export default ChatContent;
