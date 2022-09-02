import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border: 2px solid #DF5147;
  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.07em;
  color: #DF5147;
  background: transparent;
  &:hover {
    background: #DF5147;
    color: #F5F4F0;
  }
  &:active{
    background: #DF5147;
    color: #0E170D;
  }
`

function PrimaryBtn(props) {
  return (
    <StyledBtn {...props} />
  )
}

export default PrimaryBtn;