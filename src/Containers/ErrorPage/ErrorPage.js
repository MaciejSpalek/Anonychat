import React from "react";
import { useHistory } from "react-router-dom";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import {
  StyledTextWrapper,
  StyledIconButton,
  StyledContainer,
  StyledHeading,
  StyledText,
} from "./ErrorPage.styled";

const ErrorPage = () => {
  const history = useHistory();
  const handleOnClick = (routes, callback) => {
    callback();
    history.push(routes);
  };

  return (
    <StyledContainer>
      <StyledTextWrapper>
        <StyledHeading> This page </StyledHeading>
        <StyledText> doesn't exist </StyledText>
      </StyledTextWrapper>
      <StyledIconButton
        onClick={() => handleOnClick("/", ()=> {})}
        icon={faUndo}
      />
    </StyledContainer>
  );
};

export default ErrorPage;
