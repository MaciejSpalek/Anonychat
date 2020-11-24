import styled from 'styled-components';
import { FlexCenter } from 'theme/mixins';

export const StyledContainer = styled.nav`
    ${FlexCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryBlue};
`;
