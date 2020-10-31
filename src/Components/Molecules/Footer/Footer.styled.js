import styled from "styled-components";
import { FlexCenter } from "Theme/mixins";
import Icon from "../../Atoms/Icon/Icon";

export const StyledContainer = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primaryRed};
`;
export const StyledText = styled.span`
  font-size: 16px;
  color: white;
`;
export const StyledLink = styled.a`
  height: auto;
  &:hover {
    text-decoration: none;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;
