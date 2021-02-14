import styled from "styled-components";
import { FlexCenter } from 'Theme/mixins';

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  position: fixed;
  top: 70px;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;
