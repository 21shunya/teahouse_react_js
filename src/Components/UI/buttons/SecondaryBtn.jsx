import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border: 2px solid #74755D;
  border-radius: 100px;
  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.07em;
  color: #74755D;
  background: transparent;
  &:hover {
    background: #74755D;
    color: #F5F4F0;
  }
  &:active {
    color: #74755D;
    background: transparent;
  }
`

function SecondaryBtn(props) {
  return (
    <StyledBtn {...props} />
  )
}

export default SecondaryBtn;