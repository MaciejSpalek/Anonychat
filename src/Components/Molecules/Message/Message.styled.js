import styled, { css } from 'styled-components';
import { FlexCenter } from 'Theme/mixins';

export const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    align-self: flex-start;
    ${({ isItCurrentUserMessage }) => isItCurrentUserMessage ? containerStyle : null}
    
`

export const StyledContentWrapper = styled.div`
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
    ${({ isItCurrentUserMessage }) => isItCurrentUserMessage ? userStyle : converserStyle}
`;


export const converserStyle = css`
    align-self: flex-start;
    background-color: #FF4643;
    color: white;
`;

export const userStyle = css`
    align-self: flex-end;
    text-align: right;
    color: white;
    background-color: #0B2C3C;
`;

export const containerStyle = css`
    align-self: flex-end;
`;