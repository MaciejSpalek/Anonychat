import React from 'react';
import styled from 'styled-components';
import Content from '../../Components/Molecules/chatContent';
import InputPanel from './inputPanel';
import { FlexColumn } from '../../Theme/mixins';

const Container = styled.div`
    ${FlexColumn}
    height: calc(100vh - 70px - 50px);
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
