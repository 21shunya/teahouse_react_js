import React from "react";
import styled from "styled-components";

function SmallArrowIcon(props) {
  const StyledDiv = styled.button `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  `
  return (
    <StyledDiv {...props} />
  )
}

export default SmallArrowIcon