import React from 'react';
import PropTypes from 'prop-types';
import Content from 'Components/Molecules/ChatContent';
import InputBar from 'Components/Organism/InputBar';
import { Container } from './ChatWrapper.styled';

const ChatWrapper = ({ onSubmit }) => {
    return (
        <Container>
            <Content />
            <InputBar onSubmit={onSubmit} />
        </Container>
    )
}

export default ChatWrapper;

ChatWrapper.propTypes = {
    onSubmit: PropTypes.func.isRequired
}