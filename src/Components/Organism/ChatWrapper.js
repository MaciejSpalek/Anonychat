import React from 'react';
import styled from 'styled-components';
import Content from '../../Components/Molecules/chatContent';
import InputPanel from './inputPanel';
import { FlexColumn } from '../../Theme/mixins';

const Container = styled.div`
    ${FlexColumn}
    height: 100%;
`

const ChatWrapper = ({handleFunction}) => {
    return (
        <Container>
            <Content />
            <InputPanel handleFunction={(e)=> handleFunction(e)} />
        </Container>
    )
}

export default ChatWrapper;
