import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from 'react-redux';
import { FlexCenter } from "../../Theme/mixins";

const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    align-self: flex-start;
    ${({ isItYourMessage }) => isItYourMessage ? containerStyle : null}
    
`

const StyledContentWrapper = styled.div`
    padding: .5em;
    margin: .3em 0;
    border-radius: .5em;
    text-align: left;

    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    ${({ isItYourMessage }) => isItYourMessage ? userStyle : converserStyle}
`


const converserStyle = css`
    align-self: flex-start;
    background-color: #FF4643;
    color: white;
`

const userStyle = css`
    align-self: flex-end;
    text-align: right;
    color: white;
    background-color: #0B2C3C;
`

const containerStyle = css`
    align-self: flex-end;
`

const Message = ({ author, text }) => {
    const currentUserID = useSelector(state => state.users.currentUserID);
    const isItYourMessage = () => {
        return author === currentUserID;
    }
    
    return (
        <StyledContainer isItYourMessage={isItYourMessage()}>
            <StyledContentWrapper isItYourMessage={isItYourMessage()}> { text } </StyledContentWrapper>
        </StyledContainer>
    )
}

export default Message;