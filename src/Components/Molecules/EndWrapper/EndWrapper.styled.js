import styled from 'styled-components';
import Button from 'Components/Atoms/Button';
import { FlexCenter, quickShow } from 'theme/mixins';


export const Container = styled.div`
    ${FlexCenter};
    flex-direction: column;
    height: calc(100vh - 70px - 50px);
`;

export const StyledWrapper = styled.div`
    border-radius: .5rem;
    animation: ${quickShow} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    background-color: ${({theme}) => theme.colors.primaryRed};
    padding: 2rem;
`;

export const StyledButton = styled(Button)`
    margin: 10px 0;
`;

export const StyledText = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.md};
    color: ${({theme}) => theme.colors.primaryWhite};
`;