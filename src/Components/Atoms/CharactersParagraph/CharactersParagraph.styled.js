import styled from 'styled-components';

export const StyledParagraph = styled.span`
    font-size: ${({theme}) => theme.fontSizes.sm};
    color: ${({theme}) => theme.colors.primaryRed};
    padding: 0;
    line-height: 1;
`;