import styled from 'styled-components';
import { FlexCenter } from '../../Theme/mixins';


export const StyledContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 70px;
    height: calc(100vh - 70px);
    background-color: ${({theme}) => theme.colors.primaryWhite};
    overflow: hidden;
    border: .15rem solid ${({theme}) => theme.colors.primaryGray};


    @media only screen and (min-width: ${({theme}) => theme.responsive.sm}) {
        max-width: 768px;
        height: calc(100vh - 70px);
        top: 70px;
        left: 50%;
        transform: translate(-50%, 0);
    }
`