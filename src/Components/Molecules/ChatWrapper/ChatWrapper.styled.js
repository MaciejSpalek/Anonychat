import styled from 'styled-components';
import { FlexColumn } from 'theme/mixins';

export const Container = styled.div`
    ${FlexColumn};
    height: calc(100vh - 70px - 50px);
`;
