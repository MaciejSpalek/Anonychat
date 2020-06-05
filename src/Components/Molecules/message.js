import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { FlexCenter } from "../../Theme/mixins";

const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    align-self: flex-start;
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
`

const converserStyle = {
    "alignSelf": "flex-start",
    "color": "black",
    "backgroundColor": "gray"
}

const userStyle = {
    "alignSelf": "flex-end",
    "textAlign": "right",
    "color": "white",
    "backgroundColor": "blue"
}

const containerStyle = {
    "alignSelf": "flex-end",
}

const Message = ({ author, text }) => {
    const currentUserID = useSelector(state => state.users.currentUserID);
    const isItYourMessage = () => {
        return author === currentUserID;
    }
    
    return (
        <StyledContainer style={isItYourMessage() ? containerStyle : null}>
            <StyledContentWrapper style={isItYourMessage() ? userStyle : converserStyle}> { text } </StyledContentWrapper>
        </StyledContainer>
    )
}

export default Message;