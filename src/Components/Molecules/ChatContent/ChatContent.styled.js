import styled from 'styled-components';
import { FlexColumn } from 'Theme/mixins';

export const StyledContainer = styled.div`
    ${FlexColumn};
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
`;
