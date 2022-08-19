import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button `
  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.07em;
  color: #F5F4F0;
  padding: 0;
  background: transparent;
  border: none;
`

function RegularBtn(props) {
  return (
    <StyledBtn {...props} />
  )
}

export default RegularBtn