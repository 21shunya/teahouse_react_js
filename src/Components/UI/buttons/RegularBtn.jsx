import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Bellota Text';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.07em;
  color: ${({ green }) => green ? '#AEBC64' : '#F5F4F0'} ;
  padding: 0;
  background: transparent;
  border: none;
  &:hover {
    text-shadow: 0px 1px 20px #D7CFB9;
  }
  &:active {
    font-weight: 900;
  }
`

function RegularBtn(props) {
  return (
    <StyledBtn {...props} />
  )
}

export default RegularBtn