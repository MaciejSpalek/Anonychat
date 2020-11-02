import React from 'react';
import Content from 'Components/Molecules/ChatContent';
import InputPanel from 'Components/Organism/InputBar';
import { Container } from './ChatWrapper.styled';

const ChatWrapper = ({ handleFunction }) => {
    return (
        <Container>
            <Content />
            <InputPanel handleFunction={(e)=> handleFunction(e)} />
        </Container>
    )
}

export default ChatWrapper;
