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
    <StyledBtn {...props}>
      {props.left
      ? <img src='arrow-left.svg' alt='' />
      : <img src='arrow-right.svg' alt='' />
      }
    </StyledBtn>
  )
}

export default ArrowIcon