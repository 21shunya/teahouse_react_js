import React from "react";
import styled from "styled-components";
import arrowLeft from "./arrow-left.svg"
import arrowRight from "./arrow-right.svg"

function ArrowIcon(props) {
  const StyledBtn = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 31px;
    border: none;
    cursor: pointer;
  `
  
  return (
    <StyledBtn {...props}>
      {props.left
      ? <img src={arrowLeft} alt='' />
      : <img src={arrowRight} alt='' />
      }
    </StyledBtn>
  )
}

export default ArrowIcon