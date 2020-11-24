import styled from 'styled-components';
import Paragraph from 'Components/Atoms/Paragraph';
import { FlexCenter } from 'theme/mixins';

export const StyledContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    height: 100%;
`
export const StyledParagraph = styled(Paragraph)`
    color: ${({theme}) => theme.colors.primaryRed};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    line-height: 2;
`
