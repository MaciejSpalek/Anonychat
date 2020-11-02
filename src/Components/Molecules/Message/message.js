import React from 'react';
import { useSelector } from 'react-redux';
import { StyledContentWrapper, StyledContainer } from './Message.styled';

const Message = ({ author, text }) => {
    const currentUserID = useSelector(state => state.users.currentUserID);
    const isItCurrentUserMessage = () => author === currentUserID;
    
    return (
        <StyledContainer isItCurrentUserMessage={isItCurrentUserMessage()}>
            <StyledContentWrapper isItCurrentUserMessage={isItCurrentUserMessage()}> { text } </StyledContentWrapper>
        </StyledContainer>
    )
}

export default Message;