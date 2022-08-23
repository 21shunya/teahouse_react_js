import React, { Children } from "react";
import styled from "styled-components";

function ArrowIcon(props) {
  const StyledBtn = styled.button `
    display: flex;
    justify-conntent: center;
    align-items: center;
    background: transparent;
    width: 31px;
    height: 31px;
    border: none;
  `

  return (
    <StyledBtn {...props} />
  )
}

export default ArrowIcon