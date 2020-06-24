import  { css, keyframes } from 'styled-components';

export const FlexColumn = css`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

export const FlexRow = css`
 display: flex;
 flex-direction: row;
 width: 100%;
`;

export const FlexCenter = css`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;

export const quickShow = keyframes`
  from {
    transform: scale(0);
    opacity: .3;
  }

  to {
    transform: scale(1)
    opacity: 1;
  }
`;


