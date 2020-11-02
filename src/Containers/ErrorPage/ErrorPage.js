import React from "react";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import {
  StyledTextWrapper,
  StyledIconButton,
  StyledContainer,
  StyledHeading,
  StyledText,
} from "./ErrorPage.styled";

import { useHistory } from "react-router-dom";
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
        handleFunction={() => handleOnClick("/", ()=> {})}
        icon={faUndo}
      />
    </StyledContainer>
  );
};

export default ErrorPage;
